"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../components");
var ButtonContainer = function () {
    return (react_1.default.createElement("div", { className: 'button-container' },
        react_1.default.createElement("div", { className: 'button-wrapper' },
            react_1.default.createElement(components_1.Button, null, "Default"),
            react_1.default.createElement(components_1.Button, { type: 'primary' }, "Primary"),
            react_1.default.createElement(components_1.Button, { type: 'danger' }, "Danger"),
            react_1.default.createElement(components_1.Button, { type: 'dashed' }, "Dashed"),
            react_1.default.createElement(components_1.Button, { type: 'link' }, "Link")),
        react_1.default.createElement("div", { className: 'button-wrapper' },
            react_1.default.createElement(components_1.Button, { size: 'small' }, "Default"),
            react_1.default.createElement(components_1.Button, { type: 'primary', size: 'small' }, "Primary"),
            react_1.default.createElement(components_1.Button, { type: 'danger', size: 'small' }, "Danger"),
            react_1.default.createElement(components_1.Button, { type: 'dashed', size: 'small' }, "Dashed"),
            react_1.default.createElement(components_1.Button, { type: 'link', size: 'small', href: 'http://www.baidu.com' }, "Link")),
        react_1.default.createElement("div", { className: 'button-wrapper' },
            react_1.default.createElement(components_1.Button, { size: 'large' }, "Default"),
            react_1.default.createElement(components_1.Button, { type: 'primary', size: 'large' }, "Primary"),
            react_1.default.createElement(components_1.Button, { type: 'danger', size: 'large' }, "Danger"),
            react_1.default.createElement(components_1.Button, { type: 'dashed', size: 'large' }, "Dashed"),
            react_1.default.createElement(components_1.Button, { type: 'link', size: 'large', href: 'http://www.baidu.com' }, "Link")),
        react_1.default.createElement("div", { className: 'button-wrapper' },
            react_1.default.createElement(components_1.Button, { size: 'small', shape: 'circle' }, "A"),
            react_1.default.createElement(components_1.Button, { type: 'primary', size: 'small', shape: 'circle' }, "B"),
            react_1.default.createElement(components_1.Button, { type: 'danger', shape: 'circle' }, "C"),
            react_1.default.createElement(components_1.Button, { type: 'dashed', size: 'large', shape: 'circle' }, "D"),
            react_1.default.createElement(components_1.Button, { type: 'link', size: 'large', shape: 'circle' }, "E")),
        react_1.default.createElement("div", { className: 'button-wrapper' },
            react_1.default.createElement(components_1.Button, { size: 'small', shape: 'round' }, "Default"),
            react_1.default.createElement(components_1.Button, { type: 'primary', size: 'small', shape: 'round' }, "Primary"),
            react_1.default.createElement(components_1.Button, { type: 'danger', shape: 'round' }, "Danger"),
            react_1.default.createElement(components_1.Button, { type: 'dashed', size: 'large', shape: 'round' }, "Dashed"),
            react_1.default.createElement(components_1.Button, { type: 'link', size: 'large', shape: 'round' }, "Link")),
        react_1.default.createElement("div", { className: 'button-wrapper' },
            react_1.default.createElement(components_1.Button, { size: 'small', disabled: true }, "Default"),
            react_1.default.createElement(components_1.Button, { type: 'primary', size: 'small', disabled: true }, "Primary"),
            react_1.default.createElement(components_1.Button, { type: 'danger', disabled: true }, "Danger"),
            react_1.default.createElement(components_1.Button, { type: 'dashed', size: 'large', disabled: true }, "Dashed"),
            react_1.default.createElement(components_1.Button, { type: 'link', size: 'large', disabled: true, href: 'http://www.baidu.com' }, "Link")),
        react_1.default.createElement("div", { className: 'button-wrapper' },
            react_1.default.createElement(components_1.Button, { size: 'small', disabled: true, block: true }, "Default"),
            react_1.default.createElement(components_1.Button, { size: 'small', block: true }, "Default"),
            react_1.default.createElement(components_1.Button, { type: 'primary', size: 'small', block: true }, "Primary"),
            react_1.default.createElement(components_1.Button, { type: 'danger', block: true }, "Danger"),
            react_1.default.createElement(components_1.Button, { type: 'dashed', size: 'large', block: true }, "Dashed"),
            react_1.default.createElement(components_1.Button, { type: 'link', size: 'large', block: true, href: 'http://www.baidu.com' }, "Link"))));
};
exports.default = ButtonContainer;
