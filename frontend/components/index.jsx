var React = require('react');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');
var Map = require('./map');

var Index = React.createClass({
  getInitialState: function(){
    return ({benches: BenchStore.all()});
  },
  componentDidMount: function(){
    this.benchToken = BenchStore.addListener(this._onChange);
  },
  _onChange: function(){
    this.setState({benches: BenchStore.all()});
  },
  componentWillUnmount: function(){
    this.benchToken.remove();
  },
  goToShow: function(bench, e){
    console.log(bench.id);
    this.props.history.pushState(null, 'bench/' + bench.id);

    // this.history.pushState(null, 'bench/' + )
  },
  render: function(){
    var benches = [];
    var that = this;
    if (typeof this.state.benches !== 'undefined') {
      this.state.benches.map(function(bench, idx){
        benches.push(<div onClick={that.goToShow.bind(that, bench)}
                          key={idx}>{bench.description}
                     </div>);
      });
    }
    return(
      <div>
        <br/>
        <div>Index:</div>
        <div>{benches}</div>
      </div>
    );
  }
});

module.exports = Index;
