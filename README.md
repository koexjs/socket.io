# koa-socket.io

[![NPM version](https://img.shields.io/npm/v/@zcorky/koa-socket.io.svg?style=flat)](https://www.npmjs.com/package/@zcorky/koa-socket.io)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/koa-socket.io.svg?style=flat)](https://coveralls.io/r/zcorky/koa-socket.io)
[![Dependencies](https://david-dm.org/@zcorky/koa-socket.io/status.svg)](https://david-dm.org/@zcorky/koa-socket.io)
[![Build Status](https://travis-ci.com/zcorky/koa-socket.io.svg?branch=master)](https://travis-ci.com/zcorky/koa-socket.io)
![license](https://img.shields.io/github/license/zcorky/koa-socket.io.svg)
[![issues](https://img.shields.io/github/issues/zcorky/koa-socket.io.svg)](https://github.com/zcorky/koa-socket.io/issues)

> socket.io for Koa

### Install

```
$ npm install @zcorky/koa-socket.io
```

### Usage

```javascript
import withSocketIO from '@zcorky/koa-socket.io';

import * as Koa from 'koa';
const app = new Koa();
withSocketIO(app);

app.use(cors());

app.use(ctx => {
  ctx.body = 'Hello, World!';
});

// app.io is the socket.io instance
app.io.on('connection', socket => {
  // do something
});

app.listen(8000, '0.0.0.0', () => {
  console.log('koa server start at port: 8000');
});
```

### Related
* [koa.io](https://github.com/koajs/koa.io)
* [egg-socket.io](https://github.com/eggjs/egg-socket.io)