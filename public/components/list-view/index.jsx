'use strict';
const React = require('react');
const cx = require('classnames');
const throttle = require('./util').throttle;

class ListView extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.__onScroll = throttle(this._onScroll.bind(this), 50);
    this.__onScroll = this.__onScroll.bind(this);
    window.addEventListener('scroll', this.__onScroll);
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.rows.length !== nextProps.rows.length){
      window.addEventListener('scroll', this.__onScroll);
    }
    return true;
  }
  componentDidUpdate(p){

  }
  _onScroll(){
    var {onEndReach} = this.props;
    var scrollHeight = document.body.scrollTop + document.documentElement.clientHeight;
    var totalHeight = document.body.scrollHeight;
    if(scrollHeight >= totalHeight - 400){
      window.removeEventListener('scroll',this.__onScroll);
      console.log('trigger');
      onEndReach();
    }
  }
  render(){
    let {prefixCls, rows, renderFooter} = this.props;
    // let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

    return (
      <div className={prefixCls}>
        {rows}
        {renderFooter}
      </div>
    );
  }
}

ListView.defaultProps = {
  prefixCls: 'list-view'
}

module.exports = ListView;
