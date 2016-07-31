var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ScanBox = React.createClass({
  render: function (){
    return (
      <li><Link to={this.props.scanUrl}><span className="fa fa-crosshairs"></span> Scan</Link></li>
    );
  }
});

module.exports = ScanBox;
