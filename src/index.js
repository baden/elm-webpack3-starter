require('./all.scss');
require('bootstrap-css');
import Elm from './App/App.elm';

const element = document.getElementById('elm-app');
const App = Elm.App.embed(element);
