var Reflux = require('reflux');
var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

var PokedexStore = Reflux.createStore({
  listenables: [Actions],
  getPokedex: function (start, end) {
    var check;
    if(!this.pokedex)
      this.pokedex = [];
    for (var i = start; i <= end; i++) {
      HTTP.get('/pokemon/' + i).then(function (response) {
        check = this.checkDuplicates(response.id);
        if(check){
          var pokemon = {
            id: response.id,
            name: response.name,
            imgUrl: response.sprites.front_default,
            types: response.types,
            pokemonUrl: "/pokemon/" + response.id,
          };
        }
        this.pokedex.push(pokemon);
        this.sort("Lowest Number First");
      }.bind(this), function (error) {
        console.log('Error: ' + error);
      });
    }
    this.triggerUpdate();
  },
  checkDuplicates: function (pokemonId) {
    return this.pokedex.every(function (item) {
      return item.id !== pokemonId;
    });
  },
  sort: function (order) {
    this.pokedex = this.pokedex.sort(function (param1, param2){
      switch(order) {
        case "A-Z":
        return param1.name.localeCompare(param2.name);

        case "Z-A":
        return param2.name.localeCompare(param1.name);

        case "Lowest Number First":
        return param1.id - param2.id;

        case "Highest Number First":
        return param2.id - param1.id;
      }
    });
    this.triggerUpdate();
  },
  triggerUpdate: function (){
    this.trigger('change', this.pokedex);
  }
});

module.exports = PokedexStore;
