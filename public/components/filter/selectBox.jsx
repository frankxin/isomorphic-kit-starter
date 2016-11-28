'use strict';
const React = require('react');
const classNames = require('classnames');

class SelectBox extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
  }
  onMaskClick(e){
    e.stopPropagation();
  }
  render(){
    let {type, prefixCls, store} = this.props, content;

    return (
      <div className={prefixCls} onClick={this.onMaskClick}>
        <MainContent {...this.props}/>
      </div>
    );
  }
}

SelectBox.defaultProps = {
    prefixCls: 'select-box',
    store: {
      filter: {
        byClass: {
          promotion: [{
            name: '限时折扣',
            checked: true
          },{
            name: '团购',
            checked: false
          }],
          cate: [{
            name: '自己收集整理的最适合婴幼儿吃的零食集合类',
            checked: false
          },{
            name: '80后小时候的味道',
            checked: false
          },{
            name: '怀孕妈妈吃',
            checked: false
          }]
        }
      }
    }
}

function MainContent(props){
  if(props.type == 1){
      return (
        <ul className={`${props.prefixCls}-onecolumn`}>
          <li>在售</li>
          <li>已下架</li>
        </ul>
      );
    }else if(props.type == 2){
      return (
        <ul className={`${props.prefixCls}-onecolumn`}>
          <li>默认排序</li>
          <li>添加时间</li>
          <li>总销量 由高到低</li>
          <li>总销量 由低到高</li>
          <li>库存 由高到低</li>
        </ul>
      );
    }else if(props.type == 3){
      return (
        <div className={`${props.prefixCls}-cate`}>
          <div>
            <div className={`${props.prefixCls}-cate-title`}>促销分类</div>
            <ul className={`${props.prefixCls}-cate-check clearfix`}>
              {props.store.filter.byClass.promotion.map((v,i)=>
                  <li key={i} className={v.checked?'checked':''}>{v.name}</li>
              )}
            </ul>
          </div>
          <div>
            <div className={`${props.prefixCls}-cate-title`}>分类</div>
            <ul className={`${props.prefixCls}-cate-check clearfix`}>
              <li>自己收集整理的最适合婴幼儿吃的零食集合类</li>
              <li>80后小时候的味道</li>
              <li>怀孕妈妈吃</li>
            </ul>
          </div>
        </div>
      )
    }
}

module.exports = SelectBox;
