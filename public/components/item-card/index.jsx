'use strict';
const React = require('react');
const FuncBar = require('./funcBar.jsx');
const cx = require('classnames');

class ItemCard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let {prefixCls, product} = this.props;
    return (
       <div className={prefixCls}>
          <div className={`${prefixCls}-des`}>
            <a href="" className="item-link"></a>
            <div className="img-container">
              <img src={product.img} />
            </div>
            <div className="detail">
              <div className="detail-title">{product.title}</div>
              <div className="detail-price">
                  <span className="price">{'¥' + product.activityPrice}</span><span className="cross-though">{'¥' + product.price}</span>
              </div>
              <div className="detail-profit">
                <span className="price">{'¥' + product.commission}</span><span className="type">利润</span>
              </div>
            </div>
          </div>
          <div className={`${prefixCls}-info`}>
            <span>
              <span className="${prefixCls}-info-title">库存：</span><span className="${prefixCls}-info-content">2000</span>
              <span className="${prefixCls}-info-title">分销等级：</span><span className="${prefixCls}-info-content">初级</span>
              <span className="${prefixCls}-info-title">分类：</span><span className="${prefixCls}-info-content">新鲜</span>
            </span>
          </div>
          <FuncBar />
        </div>
    );
  }
}

ItemCard.defaultProps = {
  prefixCls: 'item-card',
  product: {
    img: 'https://si.geilicdn.com/hz_fxweb_0f500000015805896ff70a026860_750_750_unadjust.png?w=640&h=640',
    title: '【包邮广州仓】泰国格力高全系列21盒组合礼包',
    price: 11.11,
    activityPrice: 1.11,
    commission: 1,
    sold: 10
  }
}

module.exports = ItemCard;
