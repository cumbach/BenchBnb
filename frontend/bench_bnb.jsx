var ApiUtil = require('./util/api_util');
var BenchStore = require('./stores/bench');
var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var Search = require('./components/search');
var BenchForm = require('./components/bench_form');
var FilterParams = require('./components/filter_params');
var Show = require('./components/show');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});


var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>
    <Route path="bench/:id" component={Show}/>
    <Route path="/benches/new" component={BenchForm}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('content')
  );
});
