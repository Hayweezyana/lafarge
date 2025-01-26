import express from "express";
import cors from "cors";
import AppError from "@shared/error/app.error";
import Logger from "@shared/utils/logger";
import { ErrorResponse } from "@shared/utils/response.util";
import initializeDatabase from "./database";
import Validator from "validatorjs";
import "./shared/subscribers/audit-log.subscriber";
import httpStatus from "http-status";

export function bootstrapApp(app: express.Application) {
	registerThirdPartyModules(app);

	initializeDatabase();

	registerCustomValidationRules();
}

function registerThirdPartyModules(app: express.Application) {
	app.use(cors({ origin: true }));
	app.use(express.json({ limit: "50mb" }));
	app.use(express.urlencoded({ extended: true }));
}

function registerCustomValidationRules() {
	// initialize custom validations for validatorjs
	const uuidRegex =
		/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

	Validator.register(
		"password",
		(value: string) => {
			return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/.test(
				value
			);
		},
		"The :attribute field must be at least 8 characters and must contain at least one uppercase, one lowercase, one digit, and one special character"
	);

	Validator.register(
		"name",
		(value) => {
			return /^[a-zA-Z-]{2,50}$/.test(value);
		},
		"The :attribute field is not valid"
	);

	Validator.register(
		"cleanString",
		(value) => {
			return /^[a-zA-Z0-9_ -]{1,100}$/.test(value);
		},
		"The :attribute field is not valid. Please ensure it doesn't contain special characters and not more than 100 characters"
	);

	Validator.register(
		"username",
		(value) => {
			return /^[a-zA-Z-][a-zA-Z0-9_-]{1,20}$/.test(value);
		},
		"The :attribute field is not valid"
	);

	Validator.register(
		"uuid",
		(value) => {
			return uuidRegex.test(value);
		},
		":attribute is not a valid UUID"
	);

	Validator.register(
		"phone",
		(value: any) => {
			// eslint-disable-next-line no-useless-escape
			return value.match(
				/^(?:(?:(?:\+?234(?:\h1)?|01)\h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/
			);
		},
		"The :attribute field is not in the correct format. Example of allowed format is 2348888888888."
	);

	Validator.register(
		"amount",
		(value: any) => {
			return !Number.isSafeInteger(value);
		},
		"The :attribute field is invalid"
	);
}

export function setErrorHandler(app: express.Application) {
	app.use((err, _req, res, _next) => {
		const statusCode = err.statusCode || 503;
		const message =
			err instanceof AppError
				? err.message
				: "We are unable to process this request. Please try again.";

		Logger.error({ err: err.cause || err });

		res.status(statusCode).json(ErrorResponse(message));
	});
}

export function setUndefinedRoutesErrorHandler(app: express.Application) {
	app.use((req, res, _next) => {
		const message = `Cannot ${req.method} ${req.originalUrl}`;
		res.status(httpStatus.NOT_FOUND).json(ErrorResponse(message));
	});
}
