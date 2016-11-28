'use strict';
const React = require('react');
const classNames = require('classnames');
const SelectBox = require('./selectBox.jsx');
class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeKey: "0",
            showSelectBox: false
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleItemClick(e){
        let onClickValue = e.currentTarget.getAttribute('data-type');
        console.log(onClickValue);

        if(this.state.activeKey === onClickValue){
            this.setState({
                activeKey: "0",
                showSelectBox: false
            })
        }else{
            this.setState({
                activeKey: onClickValue,
                showSelectBox: true
            })
        }
    }
    getFilterCls(key){
        let {prefixCls} = this.props;
        return classNames({
            [`${prefixCls}-panel-staff`]: true,
            [`${prefixCls}-panel-staff-active`]: this.state.activeKey == key
        })
    }
    render(){
        let {prefixCls} = this.props;
        return (
            <div className={prefixCls}>
              <div className={`${prefixCls}-panel`}>
                  <span data-type="1" className={this.getFilterCls("1")} onClick={this.handleItemClick}>
                      在售<i></i>
                  </span>
                  <span data-type="2" className={this.getFilterCls("2")} onClick={this.handleItemClick}>
                      排序<i></i>
                  </span>
                  <span data-type="3" className={this.getFilterCls("3")} onClick={this.handleItemClick}>
                      筛选<i></i>
                  </span>
                  <span className={`${prefixCls}-panel-staff`}>批量管理</span>
              </div>
              <div className={`${prefixCls}-content`}>
                  {this.state.showSelectBox &&
                  <SelectBox type={this.state.activeKey.toString()} />}
              </div>
            </div>
        );
    }
}

Filter.defaultProps = {
    prefixCls: 'filter'
}

module.exports = Filter;
