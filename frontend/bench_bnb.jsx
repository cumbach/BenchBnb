var ApiUtil = require('./util/api_util');
var BenchStore = require('./stores/bench');
var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/search');


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Search/>, document.getElementById('content')
  );
});
