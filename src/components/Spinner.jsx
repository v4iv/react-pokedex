var React = require('react');

var spinnerStyle ={
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute"
}

var Spinner = React.createClass({
  render: function (){
    return (
      <div className="col-xs-12 text-center">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
});

module.exports = Spinner;
