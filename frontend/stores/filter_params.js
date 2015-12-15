var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FilterParamsStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/bench_constants');

var _filterParams = {};

FilterParamsStore.all = function () {
  return _filterParams;
};

var resetBorderParams = function(filterBorderParams){
  _filterParams.borders = filterBorderParams;
};

var resetSeatingParams = function(filterSeatingParams){
  _filterParams.range = filterSeatingParams;
};


FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BORDER_PARAMS_UPDATED:
      resetBorderParams(payload.filterBorderParams);
      FilterParamsStore.__emitChange();
      break;
    case BenchConstants.SEATING_PARAMS_UPDATED:
      resetSeatingParams(payload.filterSeatingParams);
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
