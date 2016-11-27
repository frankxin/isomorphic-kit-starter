const React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title></title>
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
