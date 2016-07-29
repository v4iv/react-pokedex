var React = require('react');

var ScanBox = React.createClass({
  render: function (){
    return (
      <li><a href=""><span className="fa fa-crosshairs"></span> Scan</a></li>
    );
  }
});

module.exports = ScanBox;
