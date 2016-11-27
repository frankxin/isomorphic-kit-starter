const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Layout = require('./Layout.jsx');

class Index extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Layout>
        <h1>Hello world</h1>
      </Layout>
    );
  }
}

module.exports = Index;
