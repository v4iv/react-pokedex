var React = require('react');

var StatsCard = React.createClass({
  render: function (){
    return (
      <div className="col-sm-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Stats</h3>
          </div>
          <div className="panel-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = StatsCard;
