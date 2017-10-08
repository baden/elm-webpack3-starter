require('./all.scss');
// require('bootstrap-css');
var Elm = require('./App/App.elm');
// import Elm from './App/App.elm';

var element = document.getElementById('elm-app');
var App = Elm.App.embed(element);

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  );
  document.head.appendChild(msViewportStyle);
}
