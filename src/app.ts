import "reflect-metadata";
import "dotenv/config";
import "module-alias/register";
import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import {
	bootstrapApp,
	setErrorHandler,
	setUndefinedRoutesErrorHandler,
} from "./bootstrap";
import RouteVersion from "@config/route.config";
import routes from "./shared/routes/index.routes";
import logger from "@shared/utils/logger";

class App {
	private app: express.Application;
	private server: http.Server;
	private io: SocketIOServer;

	constructor() {
		this.app = express();
		bootstrapApp(this.app);

		this.registerModules();

		this.globalErrorHandler();

		this.undefinedRoutesErrorHandler();

		this.server = http.createServer(this.app);

		

		// Initialize Socket.IO
		this.io = new SocketIOServer(this.server, {
			maxHttpBufferSize: 1e6,
			cors: {
			  origin: "http://localhost:3000", // Update as per your frontend URL
			  methods: ["GET", "POST"],
			  credentials: true,
  },
		  });
	  
		  this.initializeSocket();
	}

	private registerModules() {
		this.app.use(express.json());
		this.app.use(routes.app); // Register your main app routes
		this.app.use(routes.health); // Register health check routes
		this.app.use(RouteVersion.v1, routes.submissionsManagement);
		this.app.use(RouteVersion.v1, routes.leaderboardManagement);
		this.app.use(RouteVersion.v1, routes.teamsManagement);
		this.app.use(RouteVersion.v1, routes.dynamicPromptsManagement);
		this.app.use(RouteVersion.v1, routes.materialsManagement);
		
		
	}

	private initializeSocket() {
		this.io.on("connection", (socket) => {
		  logger.info(`A client connected: ${socket.id}`);
	
		  // Example: Emit and listen to events
		  socket.on("message", (data) => {
			logger.info(`Received message: ${data}`);
			socket.emit("response", { message: "Hello from the server!" });
		  });
	
		  socket.on("disconnect", () => {
			logger.info(`Client disconnected: ${socket.id}`);
		  });
		});
	  }

	public getInstance() {
		return this.app;
	}

	public getSocketInstance() {
		return this.io;
	  }

	private globalErrorHandler() {
		setErrorHandler(this.app);
	}

	private undefinedRoutesErrorHandler() {
		setUndefinedRoutesErrorHandler(this.app);
	}

	public async close() {
		if (this.server) {
			this.server.close();
		}
	}

	public listen(port: number, address = "127.0.0.1") {
		return this.server.listen(port, address, () => {
			logger.info(`Server listening on ${address}:${port}`);
		});
	}
}

export default App;
