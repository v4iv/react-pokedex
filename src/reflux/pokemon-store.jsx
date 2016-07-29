var Reflux = require('reflux');
var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

var PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getPokemon: function (pokemonID){
    var fetch_timeout = setTimeout("pokemonScanFail()", 10000);
    HTTP.get('/pokemon/' + pokemonID).then(function (response){
      clearTimeout(fetch_timeout);
      this.pokemon = response;
      this.pokemon.imgURL = "http://pokeapi.co/media/img/" + response.id + ".png";
      this.triggerUpdate();
    }.bind(this), function (error){
      console.log('Error: ' + error);
      clearTimeout(fetch_timeout);
      pokemonScanFail(error);
    });
  },
  pokemonScanFail: function (error){
    alert("Error: " + error);
  },
  triggerUpdate: function (){
    this.trigger('change', this.pokemon);
  }
});

module.exports = PokemonStore;
