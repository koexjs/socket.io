# socket.io

[![NPM version](https://img.shields.io/npm/v/@koex/socket.io.svg?style=flat)](https://www.npmjs.com/package/@koex/socket.io)
[![Coverage Status](https://img.shields.io/coveralls/koexjs/socket.io.svg?style=flat)](https://coveralls.io/r/koexjs/socket.io)
[![Dependencies](https://img.shields.io/david/koexjs/socket.io.svg)](https://github.com/koexjs/socket.io)
[![Build Status](https://travis-ci.com/koexjs/socket.io.svg?branch=master)](https://travis-ci.com/koexjs/socket.io)
![license](https://img.shields.io/github/license/koexjs/socket.io.svg)
[![issues](https://img.shields.io/github/issues/koexjs/socket.io.svg)](https://github.com/koexjs/socket.io/issues)


> socket.io for koa extend.

### Install

```
$ npm install @koex/socket.io
```

### Usage

```javascript
import withSocketIO from '@koex/socket.io';

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