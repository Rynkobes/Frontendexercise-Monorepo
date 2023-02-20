"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorComponent = void 0;
var react_1 = __importDefault(require("react"));
var ErrorComponent = function (props) {
    return (react_1.default.createElement("div", null, props.errorMessage));
};
exports.ErrorComponent = ErrorComponent;
