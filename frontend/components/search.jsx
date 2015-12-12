var React = require('react');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');
var Index = require('./index');
var Map = require('./map');

var Search = React.createClass({
  // getInitialState: function(){
  //   return ({benches: BenchStore.all()});
  // },
  // componentDidMount: function(){
  //   BenchStore.addListener(this._onChange);
  //   ApiUtil.fetchBenches();
  // },
  // _onChange: function(){
  //   this.setState({benches: BenchStore.all()});
  // },
  render: function(){
    // console.log(this.);
    return(
      <div>
        <Index/>
        <Map/>
      </div>
    );
  }
});

module.exports = Search;
