var React = require('react');
var Reflux = require('reflux');

var Actions = require('../reflux/actions.jsx');
var PokemonStore = require('../reflux/pokemon-store.jsx');

var NavBar = require('./NavBar.jsx');
var ScanBox = require('./ScanBox.jsx')
var SearchBox = require('./SearchBox.jsx');
var InfoCard = require('./InfoCard.jsx');
var TypeSlot = require('./TypeSlot.jsx');
var StatsCard = require('./StatsCard.jsx');
var StatBar = require('./StatBar.jsx');

var scanPointer = {
    cursor: "pointer"
};

var PokemonApp = React.createClass({
  mixins: [Reflux.listenTo(PokemonStore, 'onChange')],
  getInitialState: function (){
    return ({
      pokemon: {
        types: [{
          type: {}
        }],
        stats: [{
          stat: {}
        }]
      },
      loading: true
    });
  },
  componentWillMount: function (){
    var pokemonID = Math.floor((Math.random() * 721) + 1);
    Actions.getPokemon(pokemonID);
  },
  onChange: function (event, data) {
    this.setState({pokemon: data});
  },
  handleScan: function (){
    var surprise = Math.floor((Math.random() * 721) + 1);
    Actions.getPokemon(pokemonID);
  },
  handleSearch: function(query) {
    Actions.getPokemon(query);
  },
  render: function (){
    var id = "" + this.state.pokemon.id;
    var filler = "000";
    var pk_id = filler.substring(0, filler.length - id.length) + id;
    var typeSlots = this.state.pokemon.types.map(function (item){
      return(<TypeSlot key={item.slot + item.type.name} type={item.type.name}/>);
    });
    var statBars = this.state.pokemon.stats.map(function (item, index){
      return (<StatBar key={index} stat_value={item.base_stat} name={item.stat.name}/>);
    });

    return (
      <div>
        <NavBar>
          <ScanBox onClick={this.handleScan} style={scanPointer}/>
          <SearchBox onNewSearch={this.handleSearch}/>
        </NavBar>
        <div className="col-xs-12">
          <div className="pokemon-card">
            <img src={this.state.pokemon.imgURL}/>
            <div className="pokemon-info">
              <div className="row">

                <InfoCard
                  id = {pk_id}
                  name = {this.state.pokemon.name}
                  height = {this.state.pokemon.height}
                  weight = {this.state.pokemon.weight}
                >
                  {typeSlots}
                </InfoCard>

                <StatsCard>
                  {statBars}
                </StatsCard>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PokemonApp;
