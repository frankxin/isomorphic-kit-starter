'use strict';
let koa = require('koa');
let path = require('path');
let react = require('koa-react-view');
var register = require('babel-register');
let app = koa();

let viewPath = path.join(__dirname, 'views');
let assetsPath = path.join(__dirname, 'public');

react(app, {views: viewPath});

register({
  presets: [ 'es2015', 'react' ],
  extensions: [ '.jsx' ],
});

app.use(function* (){
  this.render('index', {});
})

app.listen(3000);
console.log('server start listen at 3000');
