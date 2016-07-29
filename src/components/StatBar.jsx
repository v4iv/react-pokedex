var React = require('react');

var StatBar = React.createClass({
  render: function (){
    return (
      <div>
        <h5>{this.props.name}</h5>
        <div className="progress">
          <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow={this.props.stat_value} style={{width:this.props.stat_value + "%"}} aria-valuemin="0" aria-valuemax="100">
          <span className="sr-only">{this.props.name}</span></div>
        </div>
      </div>
    );
  }
});

module.exports = StatBar;
