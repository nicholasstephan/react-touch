/** @jsx React.DOM */

var React = require('react');
var RoutedLink = require('react-touch/lib/routing/RoutedLink');

require('./LeftNav.css');

var LeftNav = React.createClass({
  render: function() {
    return (
      <div className="LeftNav">
        <RoutedLink href="/home" className="LeftNav-link" onClick={this.props.onClick}>Home</RoutedLink>
        <RoutedLink href="/scroll" className="LeftNav-link" onClick={this.props.onClick}>Simple scroll</RoutedLink>
        <RoutedLink href="/glass" className="LeftNav-link" onClick={this.props.onClick}>Frosted glass</RoutedLink>
        <RoutedLink href="/viewer" className="LeftNav-lastLink" onClick={this.props.onClick}>Photo gallery</RoutedLink>
      </div>
    );
  }
});


module.exports = LeftNav;
