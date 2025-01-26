"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSampleRules = exports.createSampleRulesMessages = exports.createSampleRules = void 0;
exports.createSampleRules = {
    name: "required|string|min:5|max:100",
    email: "email",
    phoneNumber: "min:11|max:13|phone",
    address: "string|min:5|max:100",
};
exports.createSampleRulesMessages = {
    "max.phoneNumber": `The phoneNumber field should not be greater than 13 characters. Example of allowed format is 2348888888888.`,
};
exports.updateSampleRules = exports.createSampleRules;
//# sourceMappingURL=create-sample.validator.js.map