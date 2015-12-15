var React = require('react');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');
var Map = require('./map');

var Show = React.createClass({
  // getInitialState: function(){
  //   return ({benches: BenchStore.all()});
  // },
  // componentDidMount: function(){
  //   this.benchToken = BenchStore.addListener(this._onChange);
  //   // ApiUtil.fetchBenches();
  // },
  // _onChange: function(){
  //   this.setState({benches: BenchStore.all()});
  // },
  // componentWillUnmount: function(){
  //   this.benchToken.remove();
  // },
  render: function(){
    return(
      <div>
        <br/>
        <div>FML!!!!!!!</div>
      </div>
    );
  }
});

module.exports = Show;
