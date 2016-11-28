'use strict';
const React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>xxx</title>
          <script src="/components/rem/index.js"></script>
          <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
          {this.props.children}
          <script src="/js/bundle.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
