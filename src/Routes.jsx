var React = require('react');
var ReactRouter = require('react-router');
var History = require('history');

const appHistory = ReactRouter.useRouterHistory(History.createHashHistory)({ queryKey: false });

var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;

var Base = require('./components/Base.jsx');
var PokemonApp = require('./components/PokemonApp.jsx');

var Routes = (
    <Router history={appHistory}>
        <Route path="/" component={Base}>
            <IndexRoute component={PokemonApp}/>
        </Route>
    </Router>
);

module.exports = Routes;
