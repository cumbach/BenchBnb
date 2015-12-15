var React = require('react');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');
var Map = require('./map');
var FilterParamsStore = require('../stores/filter_params.js');
var FilterActions = require('../actions/filter_actions');

var FilterParams = React.createClass({
  getInitialState: function(){
    return ({minSeats: null, maxSeats: null});
  },
  // componentDidMount: function(){
  //   // this.filterToken = FilterParamsStore.addListener(this._onChange);
  //   // ApiUtil.fetchBenches();
  // },
  updateMin: function(e){
    this.setState({minSeats: e.target.value}, function(){
      this.update();
    });
  },
  updateMax: function(e) {
    this.setState({maxSeats: e.target.value}, function(){
      this.update();
    });
  },
  update: function(){
    FilterActions.updateSeatingParams({
      min: this.state.minSeats, max: this.state.maxSeats
    });
  },
  // _onChange: function(){
  //   this.setState({benches: BenchStore.all()});
  // },
  // componentWillUnmount: function(){
  //   this.benchToken.remove();
  // },
  render: function(){
    return(
      <div>
        <div>Filter by Seating:</div>

        <div>Minimum:</div>
          <input
            value={this.state.minSeats}
            onChange={this.updateMin}/>

        <div>Maximum:</div>
          <input
            value={this.state.maxSeats}
            onChange={this.updateMax}/>

      </div>
    );
  }
});

module.exports = FilterParams;
