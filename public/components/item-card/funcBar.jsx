'use strict';
const React = require('react');

class FuncBar extends React.Component {
  render() {
    let {prefixCls} = this.props;
    return (
      <div className={prefixCls}>
        {this.props.type.map((v, i)=>
          <div className={`${prefixCls}-list-item`} key={i}>
            <i className={`icon ${v.iconCls}`}></i>
            <p>{v.name}</p>
          </div>
        )}
      </div>
    );
  }
}

FuncBar.defaultProps = {
  prefixCls: 'func-bar',
  type: [
    {
      name: '分享',
      iconCls: 'icon-share'
    },
    {
      name: '图文推广',
      iconCls: 'icon-multi-share'
    },
    {
      name: '复制链接',
      iconCls: 'icon-copy-link'
    },
    {
      name: '编辑',
      iconCls: 'icon-edit'
    },
    {
      name: '联系卖家',
      iconCls: 'icon-contact'
    },
  ]
}

module.exports = FuncBar;
