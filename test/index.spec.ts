import * as Koa from 'koa';
import * as request from 'supertest';
import * as ioc from 'socket.io-client';
import 'should';

import withSocketIO, { Application } from '../src';

function client(nsp = '', options: any = {}) {
  let url = `http://127.0.0.1:${options.port}${nsp}`;
  if (options.query) {
    url += '?' + options.query;
  }
  return ioc(url, options);
}

describe('koa socket.io', () => {
  describe('app has property io', () => {
    const app = new Koa() as Koa & Application;
    withSocketIO(app);

    app.use(async ctx => {
      app.should.have.property('io');
      ctx.body = { foo: 'bar' };
    });

    app.io.on('connection', (socket) => {
      socket.emit('s', '123');
    });

    it('should work', async () => {
      await request(app.callback())
        .get('/')
        .expect(200, { foo: 'bar' });
    });
  });

  describe('app.io work', () => {
    const app = new Koa() as Koa & Application;
    const port = 9999;
    withSocketIO(app);

    app.use(async ctx => {
      app.should.have.property('io');
      ctx.body = { foo: 'bar' };
    });

    app.io.on('connect', (socket) => {
      console.log('someone conncet: ', socket.id);

      socket.emit('chat-async-class', data => {
        console.log('chat-async-class', data);
      });

      socket.emit('chat-async-object', data => {
        console.log('chat-async-object', data);
      });
    });

    const server = app.listen(port, () => {
      console.log('server start at 9999');
    });

    it('should work', async () => {
      const clientSocket = client('', { port });
      clientSocket.on('connect', () => {
        clientSocket.emit('chat-async-class', '');
        clientSocket.emit('chat-async-object', '');
      });

      server.close();
    });
  });
});
