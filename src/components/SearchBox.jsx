var React = require('react');

var SearchBox = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    if (this.refs.searchInput.value.trim() && this.props.onNewSearch) {
      this.props.onNewSearch(this.refs.searchInput.value.toLowerCase());
      this.refs.searchInput.value = '';
    }
  },
  render: function (){
    return (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        <span className="fa fa-search"></span> Search</a>
        <ul className="dropdown-menu">
          <li>
            <form className="navbar-form" onSubmit={this.handleSubmit}>
              <input type="text" className="form-control" placeholder="name or id ..." ref="searchInput"/>
            </form>
          </li>
        </ul>
      </li>
    );
  }
});

module.exports = SearchBox;
