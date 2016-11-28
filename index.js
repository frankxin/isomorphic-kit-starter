'use strict';
let koa = require('koa');
let staticCache = require('koa-static-cache');
let path = require('path');
let react = require('koa-react-view');
var register = require('babel-register');
let app = koa();

require('es6-promise').polyfill();
let fetch = require('isomorphic-fetch');

let viewPath = path.join(__dirname, 'views');
let assetsPath = path.join(__dirname, 'public');

react(app, { views: viewPath });

register({
    presets: ['es2015', 'react'],
    extensions: ['.jsx']
});

app.use(staticCache(assetsPath));

app.use(function* () {
    let ctx = this;
    let data = yield wrapperOnFetch();
    console.log(data);
    var products = data.result.map(function(v, i) {
        return {
            title: v.itemName,
            img: v.imgHead,
            price: v.price,
            activityPrice: v.price,
            commission: v.commission,
            sold: v.sold,
            itemId: v.itemId
        }
    })
    ctx.render('index', { products: products });
})

app.listen(3000);
console.log('server start listen at 3000');

function wrapperOnFetch() {
    return fetch('//vap.gw.weidian.com/h5/fxweb/employItem.topItems/1.0', {
        method: "POST",
        body: JSON.stringify({ request: { param: { "supplySellerId": 961335408, "pageNum": 0, "pageSize": 5 } } }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(res) {
        return res.json();
    }).catch(function(err) {
        console.log(err);
    })
}
