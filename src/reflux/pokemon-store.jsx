var Reflux = require('reflux');
var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

var PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getPokemon: function (pokemonId){
    HTTP.get('/pokemon/' + pokemonId).then(function (response){
      this.pokemon = response;
      this.pokemon.imgURL = response.sprites.front_default;
      this.triggerUpdate();
    }.bind(this), function (error){
      console.log('Error: ' + error);
    });
  },
  triggerUpdate: function (){
    this.trigger('change', this.pokemon);
  }
});

module.exports = PokemonStore;
