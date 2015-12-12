var React = require('react');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');
var Map = require('./map');

var Index = React.createClass({
  getInitialState: function(){
    return ({benches: BenchStore.all()});
  },
  componentDidMount: function(){
    BenchStore.addListener(this._onChange);
    // ApiUtil.fetchBenches();
  },
  _onChange: function(){
    this.setState({benches: BenchStore.all()});
  },
  componentWillUnmount: function(){
    BenchStore.removeListener(this._onChange);
  },
  render: function(){
    return(
      <div>
        <div>In the index</div>
      </div>
    );
  }
});

module.exports = Index;
