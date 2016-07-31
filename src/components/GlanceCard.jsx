var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var GlanceCard = React.createClass({
  render: function(){
    return(
      <div className="col-sm-4">
        <div className="pokemon-card">
          <Link to={this.props.pokemonUrl}>
            <img src={this.props.image} alt={this.props.name}/>
          </Link>
          <p className="pokedex-id text-center">#{this.props.id}</p>
          <div className="pokemon-info">
            <h2>{this.props.name}</h2>
            <ul className="list list-inline">
              {this.props.children}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GlanceCard;
