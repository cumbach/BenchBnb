var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');
var Index = require('./index');
var FilterActions = require('../actions/filter_actions');
var FilterParamsStore = require('../stores/filter_params.js');

var myMarkers = [];
var Map = React.createClass({
  componentDidMount: function(){
    BenchStore.addListener(this._onChange);


    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.listenForMove();
    this.listenForClick();
  },
  listenForClick: function(){
    var thiscomp = this;
    google.maps.event.addListener(this.map, 'click', function(e) {
      var lat = e.latLng.lat();
      var lng = e.latLng.lng();
      var coords = {
        lat: lat,
        lng: lng
      };
      thiscomp.props.clickMapHandler(coords);
    });
  },

  listenForMove: function(){
    var thiscomp = this;
    google.maps.event.addListener(this.map, 'idle', function() {

      var bounds = thiscomp.map.getBounds();
      var ne = bounds.getNorthEast();
      var sw = bounds.getSouthWest();
      var sendBounds = {
        northEast: { lat: ne.lat(), lng: ne.lng()},
        southWest: { lat: sw.lat(), lng: sw.lng()}
      };
      FilterActions.updateBorderParams(sendBounds);
    });
  },
  _onChange: function() {
    var thiscomp = this;
    myMarkers.forEach(function(marker){
      marker.setMap(null);
    });
    myMarkers = [];
    var benches = BenchStore.all();
    benches.forEach(function(bench){
      var pos = new google.maps.LatLng(bench.lat, bench.lng)
      var marker = new google.maps.Marker({
        position: pos,
        map: thiscomp.map
      });
      myMarkers.push(marker);
    });
  },
  render: function(){
    return(
      <div>
        <div>Map:</div>
        <div className='map' ref='map'/>
      </div>
    );
  }
});

module.exports = Map;
