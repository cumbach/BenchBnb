var ApiActions = require('../actions/api_actions');
var FilterParamsStore = require('../stores/filter_params');

var ApiUtil = {
  fetchBenches: function(params){
    console.log(params);
    $.ajax({
      url: "api/benches",
      data: params,
      success: function (benches){
        ApiActions.receiveAll(benches);
      }
    });
  },
  createBench: function(bench){
    $.ajax({
      url: "api/benches",
      method: "POST",
      data: bench,
      success: function (benches){
        ApiActions.createBench(benches);
      }
    });
  }
};

module.exports = ApiUtil;
