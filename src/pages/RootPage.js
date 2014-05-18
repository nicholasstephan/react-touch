/** @jsx React.DOM */

var React = require('react');

var Layout = require('../layout/Layout');
var HomePage = require('../pages/HomePage');
var GlassPage = require('../pages/GlassPage');
var Message = require('../components/Message');
var ScrollPage = require('../pages/ScrollPage');
var ViewerPage = require('../pages/ViewerPage');

var RootPage = React.createClass({

  render: function() {
    var routeName = this.props.routeName;

    if (routeName === '' || routeName === 'home') {
      return <Layout className="HomePage" route="home"><HomePage /></Layout>;
    } else if (routeName === 'glass') {
      return <Layout><GlassPage /></Layout>;
    } else if (routeName === 'viewer') {
      return <Layout><ViewerPage /></Layout>;
    } else if (routeName === 'scroll') {
      return <Layout><ScrollPage /></Layout>;
    } else {
      return <h1>Route not found</h1>;
    }
  }
});

module.exports = RootPage;