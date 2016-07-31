var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'getPokedex',
  'getPokemon',
  'sort'
]);

module.exports = Actions;
