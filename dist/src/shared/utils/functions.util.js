"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUUID = exports.format_number = exports.stringToSlug = exports.validateEmail = exports.getBirthYear = exports.getAgeByDate = exports.exportCSVData = exports.generateJwtToken = exports.generateToken = exports.generateDummyAccountNumber = exports.generateCode = exports.formatAmountForDisplay = exports.convertKeysToCamelCase = exports.createSha512Hash = exports.GetUUID = exports.GetRandomID = void 0;
const crypto_1 = __importDefault(require("crypto"));
const uuid_1 = require("uuid");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const csv_writer_1 = require("csv-writer");
dotenv_1.default.config();
const GetRandomID = (maxLength = 30) => {
    const id = `${(0, uuid_1.v4)()}`;
    const cleaned = id.replaceAll("-", `${Math.floor(Math.random() * 100)}`);
    return cleaned.substring(0, maxLength);
};
exports.GetRandomID = GetRandomID;
const GetUUID = () => (0, uuid_1.v4)();
exports.GetUUID = GetUUID;
const createSha512Hash = (data, key) => {
    const hash = crypto_1.default.createHmac("sha512", key).update(JSON.stringify(data)).digest("hex");
    return hash;
};
exports.createSha512Hash = createSha512Hash;
const convertKeysToCamelCase = (obj) => {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map((item) => (0, exports.convertKeysToCamelCase)(item));
    }
    const camelCasedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const camelKey = key[0].toLowerCase() + key.slice(1);
            camelCasedObj[camelKey] = (0, exports.convertKeysToCamelCase)(obj[key]);
        }
    }
    return camelCasedObj;
};
exports.convertKeysToCamelCase = convertKeysToCamelCase;
const formatAmountForDisplay = (amount, currency) => {
    return new Intl.NumberFormat("en-NG", { style: "currency", currency: currency }).format(amount);
};
exports.formatAmountForDisplay = formatAmountForDisplay;
function generateCode(length) {
    var result = "";
    var characters = "123456789123456789123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.generateCode = generateCode;
function generateDummyAccountNumber() {
    const prefix = "02";
    const randomDigits = Math.floor(Math.random() * 100000000)
        .toString()
        .padStart(8, "0");
    return prefix + randomDigits;
}
exports.generateDummyAccountNumber = generateDummyAccountNumber;
const generateToken = async () => {
    return crypto_1.default.randomBytes(20).toString("hex");
};
exports.generateToken = generateToken;
const generateJwtToken = async (user) => {
    const secret_key = process.env.JWT_SECRET;
    const session = process.env.SESSION;
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, secret_key, { expiresIn: session });
    return token;
};
exports.generateJwtToken = generateJwtToken;
async function exportCSVData(headers, data) {
    const csvStringifier = (0, csv_writer_1.createObjectCsvStringifier)({
        header: headers,
    });
    const csvHeader = csvStringifier.getHeaderString();
    const csvRecords = csvStringifier.stringifyRecords(data);
    return csvHeader + csvRecords;
}
exports.exportCSVData = exportCSVData;
const getAgeByDate = (dateString) => {
    const dob = new Date(dateString);
    const currentDate = new Date();
    const birthYear = dob.getFullYear();
    const currentYear = currentDate.getFullYear();
    const age = currentYear - birthYear;
    return age;
};
exports.getAgeByDate = getAgeByDate;
const getBirthYear = (dateString) => {
    const dob = new Date(dateString);
    return dob.getFullYear();
};
exports.getBirthYear = getBirthYear;
function validateEmail(input_str) {
    var re = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(input_str);
}
exports.validateEmail = validateEmail;
function stringToSlug(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}
exports.stringToSlug = stringToSlug;
function format_number(number, locale = "en-US") {
    return new Intl.NumberFormat(locale).format(number);
}
exports.format_number = format_number;
function isValidUUID(uuid) {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}
exports.isValidUUID = isValidUUID;
//# sourceMappingURL=functions.util.js.map