import express from "express";
import "./shared/subscribers/audit-log.subscriber";
export declare function bootstrapApp(app: express.Application): void;
export declare function setErrorHandler(app: express.Application): void;
export declare function setUndefinedRoutesErrorHandler(app: express.Application): void;
