"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase-admin/app");
const serviceAccountKeys_json_1 = __importDefault(require("./serviceAccountKeys.json"));
/* Initialize the app with the Service Account's credentials */
(0, app_1.initializeApp)({
    credential: (0, app_1.cert)(serviceAccountKeys_json_1.default),
});
