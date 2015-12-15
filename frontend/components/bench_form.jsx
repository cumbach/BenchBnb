var React = require('react');
var ApiUtil = require('../util/api_util');

var BenchForm = React.createClass({
  getInitialState: function () {
    return {lat: this.props.location.query.lat,
            lng: this.props.location.query.lng,
            description: "", seating: ""};
  },
  updateLat: function (e) {
    this.setState({lat: e.target.value});
  },
  updateLng: function (e) {
    this.setState({lng: e.target.value});
  },
  updateDescription: function (e) {
    this.setState({description: e.target.value});
  },
  updateSeating: function (e) {
    this.setState({seating: e.target.value});
  },
  submitForm: function(e) {
    e.preventDefault();
    var bench = {
      lat: this.state.lat,
      lng: this.state.lng,
      description: this.state.description,
      seating: this.state.seating
    };
    ApiUtil.createBench({bench: bench});
    this.props.history.pushState(null, '/');

    this.setState({lat: "", lng: "", description: "", seating: ""});
  },
  render: function() {
    // console.log(this.props.location.query);
    // debugger
    return(
      <form onSubmit={this.submitForm}>
        <div className="form-group">
          <div>Latitude:</div>
          <input
            value={this.state.lat}
            onChange={this.updateLat}/>
        </div>
        <div className="form-group">
          <div>Longitude:</div>
          <input
            value={this.state.lng}
            onChange={this.updateLng}/>
        </div>
        <div className="form-group">
          <div>Description:</div>
          <textarea
            cols='20'
            rows='5'
            value={this.state.description}
            onChange={this.updateDescription}></textarea>
        </div>
        <div className="form-group">
          <div>Seating:</div>
          <input
            value={this.state.seating}
            onChange={this.updateSeating}/>
        </div>
        <input type='submit' value='Create Bench'></input>
      </form>
    );
  }
});

module.exports = BenchForm;
