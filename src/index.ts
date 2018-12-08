import * as http from 'http';
import * as Koa from 'koa';
import * as SocketIO from 'socket.io';
import { Server, Socket } from 'socket.io';

export {
  Socket,
  Server,
};

export  interface Application extends Koa {
  io: Server;
}

export interface Options extends SocketIO.ServerOptions {
  [key: string]: any;
}

function patch(app: Koa, io: Server, options?: Options) {
  app.listen = function () {
    const server = http.createServer(this.callback());
    io.attach(server, options);
    return server.listen.apply(server, arguments);
  }
}

export default (app: Koa, options?: Options) => {
  const io: Server = SocketIO();
  patch(app, io, options);
  (app as any).io = io;
};
