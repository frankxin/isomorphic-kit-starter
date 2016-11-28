'use strict';
const React = require('react');

class Search extends React.Component{

    render(){
        let {prefixCls} = this.props;
        return (
            <div className={prefixCls}>
                <span className={`${prefixCls}-help`}><a><i></i></a></span>
                <span className={`${prefixCls}-bar`}>
                    <a href=""></a>
                    <span className={`${prefixCls}-bar-text`}>请输入商品名称</span>
                </span>
            </div>
        );
    }
}

Search.defaultProps = {
    prefixCls: 'search'
}

module.exports = Search;
