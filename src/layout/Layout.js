/** @jsx React.DOM */

var React = require('react');

var App = require('react-touch/lib/primitives/App');
var RoutedLink = require('react-touch/lib/routing/RoutedLink');
var Header = require('../components/Header');
var LeftNavContainer = require('react-touch/lib/interactions/leftnav/LeftNavContainer');
var LeftNav = require('../components/LeftNav');

require('./Layout.css');

// Keep in sync with Layout.css
// TODO: deprecate the CSS standard
var SIDEBAR_WIDTH = 192;
var TOPBAR_HEIGHT = 51; // + 1 for the border

var Layout = React.createClass({
  handleNavClick: function() {
    this.refs['leftNavContainer'].closeNav();
  },

  render: function() {
    var button = (
      <div className="Layout-leftNav fa fa-bars" />
    );

    var topContent = (
      <Header className="Layout-topBar">Touch Demo</Header>
    );

    var sideContent = (
      <LeftNav onClick={this.handleNavClick}/>
    );

    return this.transferPropsTo(
      <App>
        <LeftNavContainer
          ref="leftNavContainer"
          button={button}
          topContent={topContent}
          sideContent={sideContent}
          topHeight={TOPBAR_HEIGHT}
          sideWidth={SIDEBAR_WIDTH}>
          <div className="Layout-content">
            {this.props.children}
          </div>
        </LeftNavContainer>
      </App>
    );
  }
});

Layout.TOPBAR_HEIGHT = TOPBAR_HEIGHT; // account for border

module.exports = Layout;