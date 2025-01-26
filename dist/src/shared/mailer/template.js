"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const pug_1 = __importDefault(require("pug"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});
const templateMail = async (options) => {
    const html = pug_1.default.renderFile(path_1.default.join(__dirname, "views", "email-template.pug"), {
        name: options.name,
        password: options.password,
        subject: options.subject,
        link: options.link,
    });
    const mailOptions = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        html,
    };
    return transporter.sendMail(mailOptions);
};
exports.templateMail = templateMail;
//# sourceMappingURL=template.js.map