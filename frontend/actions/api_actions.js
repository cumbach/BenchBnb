var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  createBench: function(bench){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_CREATED,
      bench: bench
    });
  }
};

module.exports = ApiActions;
