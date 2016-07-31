var React = require('react');

var NavBar = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#/"><i className="fa fa-dot-circle-o"></i> Pokédex</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              {this.props.children}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
