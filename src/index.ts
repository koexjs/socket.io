import * as http from 'http';
import * as Koa from 'koa';
import * as SocketIO from 'socket.io';
import { Server } from 'socket.io';

export  interface Application extends Koa {
  io: Server;
}

export interface Options extends SocketIO.ServerOptions {
  [key: string]: any;
}

function patch(app: Koa, io: Server) {
  app.listen = function () {
    const server = http.createServer(this.callback());
    io.attach(server);
    return server.listen.apply(server, arguments);
  }
}

export default (app: Koa, options?: Options) => {
  const io: Server = new (SocketIO as any)(options);
  patch(app, io);
  (app as any).io = io;
};
