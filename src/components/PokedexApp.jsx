var React = require('react');
var Reflux = require('reflux');
var Jquery = require('jquery');

var Actions = require('../reflux/actions.jsx');
var PokedexStore = require('../reflux/pokedex-store.jsx');

var NavBar = require('./NavBar.jsx');
var ScanBox = require('./ScanBox.jsx')
var SearchBox = require('./SearchBox.jsx');
var Spinner = require('./Spinner.jsx');
var GlanceCard = require('./GlanceCard.jsx');
var TypeSlot = require('./TypeSlot.jsx');

var scanPointer = {
    cursor: "pointer"
};

var PokedexApp = React.createClass({
  mixins: [Reflux.listenTo(PokedexStore, 'onChange')],
  getInitialState: function(){
    return({pokedex: [], loading: true});
  },
  componentDidMount: function (){
    Actions.getPokedex(1, 9);
    $(window).scroll(function () {
      if ($(window).scrollTop() === $(document).height() - $(window).height() && !this.state.loading) {
        this.setState({loading: true});
        Actions.getPokedex(this.state.pokedex.length + 1, this.state.pokedex.length + 9);
      }
    }.bind(this));
  },
  onChange: function (event, data) {
    this.setState({pokedex: data, loading: false});
  },
  handleSearch: function(query) {
    Actions.getPokemon(query);
  },
  render: function (){
    var pokemonCards = this.state.pokedex.map(function (pokemon, index) {
      var id = "" + pokemon.id;
      var filler = "000";
      var pk_id = filler.substring(0, filler.length - id.length) + id;
      var typeSlots = pokemon.types.map(function (item){
        return(<TypeSlot key={item.slot + item.type.name} type={item.type.name}/>);
      });
      return(
        <GlanceCard
          key={index}
          id={pk_id}
          image={pokemon.imgUrl}
          name={pokemon.name}
          pokemonUrl={pokemon.pokemonUrl}
        >
          {typeSlots}
        </GlanceCard>
      );
    });
    return (
      <div>
        <NavBar>
          <ScanBox style={scanPointer} scanUrl={"/pokemon/" + Math.floor((Math.random() * 721) + 1)}/>
          <SearchBox onNewSearch={this.handleSearch}/>
        </NavBar>
        <div className="row">
          {pokemonCards}
          {this.state.loading ? <Spinner/> : null}
        </div>
      </div>
    );
  }
});

module.exports = PokedexApp;
