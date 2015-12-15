var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var FilterActions = {
  updateBorderParams: function(filterBorderParams){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BORDER_PARAMS_UPDATED,
      filterBorderParams: filterBorderParams
    });
  },
  updateSeatingParams: function(filterSeatingParams){
    AppDispatcher.dispatch({
      actionType: BenchConstants.SEATING_PARAMS_UPDATED,
      filterSeatingParams: filterSeatingParams
    });
  }
};

module.exports = FilterActions;
