var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');
var Index = require('./index');

var myMarkers = [];
var Map = React.createClass({
  componentDidMount: function(){
    BenchStore.addListener(this._onChange);


    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.listenForMove();
  },
  listenForMove: function(){
    var googmap = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      myMarkers.forEach(function(marker){
        marker.setMap(null);
      });
      myMarkers = [];
      var bounds = googmap.map.getBounds();
      var ne = bounds.getNorthEast();
      var sw = bounds.getSouthWest();
      var sendBounds = {
        northEast: { lat: ne.lat(), lng: ne.lng()},
        southWest: { lat: sw.lat(), lng: sw.lng()}
      };
      ApiUtil.fetchBenches({bounds: sendBounds});
    });
  },
  _onChange: function() {
    var googmap = this;
    var benches = BenchStore.all();
    benches.forEach(function(bench){
      var pos = new google.maps.LatLng(bench.lat, bench.lng)
      var marker = new google.maps.Marker({
        position: pos,
        map: googmap.map
      });
      myMarkers.push(marker);
    });
  },
  render: function(){
    return(
      <div>
        <div>In the map</div>
        <div className='map' ref='map'/>
      </div>
    );
  }
});

module.exports = Map;
