var React = require('react');

var TypeSlot = React.createClass({
  render: function (){
    return(<li><span className={"badge " + this.props.type}>{this.props.type}</span></li>);
  }
});

module.exports = TypeSlot;
