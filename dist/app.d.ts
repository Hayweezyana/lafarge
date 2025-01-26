/// <reference types="node" />
import "reflect-metadata";
import "dotenv/config";
import "module-alias/register";
import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
declare class App {
    private app;
    private server;
    private io;
    constructor();
    private registerModules;
    private initializeSocket;
    getInstance(): express.Application;
    getSocketInstance(): SocketIOServer<import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, any>;
    private globalErrorHandler;
    private undefinedRoutesErrorHandler;
    close(): Promise<void>;
    listen(port: number, address?: string): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
}
export default App;
