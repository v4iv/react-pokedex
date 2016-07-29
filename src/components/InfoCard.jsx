var React = require('react');

var InfoCard = React.createClass({
  render: function (){
    return (
      <div className="col-sm-6 text-center">
        <p className="pokedex-id">#{this.props.id}</p>
        <h1>{this.props.name}</h1>
        <ul className="list list-inline">
          {this.props.children}
        </ul>
        <div className="pokemon-physical">
          <h4>Height: {this.props.height} ft</h4>
          <h4>Weight: {this.props.weight} kgs</h4>
        </div>
        <hr/>
      </div>
    );
  }
});

module.exports = InfoCard;
