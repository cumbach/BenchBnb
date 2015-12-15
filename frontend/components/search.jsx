var React = require('react');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');
var Index = require('./index');
var Map = require('./map');
var FilterParamsStore = require('../stores/filter_params.js');
var FilterParams = require('./filter_params');

var Search = React.createClass({
  clickMapHandler: function(coords) {
    this.props.history.pushState(null, 'benches/new', coords);
  },
  getInitialState: function(){
    return ({params: FilterParamsStore.all()});
  },
  componentDidMount: function(){
    FilterParamsStore.addListener(this._onChange);
  },
  _onChange: function(){
    this.setState({params: FilterParamsStore.all()});
    ApiUtil.fetchBenches({
      bounds: this.state.params.borders,
      range: this.state.params.range
    });
  },
  render: function(){
    // console.log(this.);
    return(
      <div>
        <div>Search:</div>
        <Map clickMapHandler={this.clickMapHandler}/>
        <FilterParams/>
        <Index/>
      </div>
    );
  }
});

module.exports = Search;
