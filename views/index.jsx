'use strict';
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Layout = require('./Layout.jsx');
const Search = require('../public/components/search');
const Filter = require('../public/components/filter');
const ListView = require('../public/components/list-view');
const ItemCard = require('../public/components/item-card');

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }
  _onEndReach(){}
  renderFooter() {
    return (
      <div style={{ padding: 30, textAlign: 'center' }}>
        {this.state.loading ? '加载中...' : ''}
      </div>
    );
  }
  render() {
    return (
      <Layout>
        <Search />
        <Filter />
        <ListView
          rows={this.props.products.map((v, i) =>
            <div key={String(v.itemId)}>
              <ItemCard product={v} />
              <div style={{ width: '20rem', height: '0.533333333rem' }}></div>
            </div>
          )}
          onEndReach={this._onEndReach.bind(this)}
          renderFooter={this.renderFooter()}
          />
      </Layout>
    );
  }
}

module.exports = Index;
