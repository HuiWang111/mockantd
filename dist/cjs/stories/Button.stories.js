"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = exports.Link = exports.Shape = exports.Size = exports.Type = exports.Basic = void 0;
/* eslint-disable no-console */
var React = __importStar(require("react"));
var components_1 = require("../components");
require("./styles/button.less");
exports.default = {
    title: 'Button',
    component: components_1.Button
};
exports.Basic = function () {
    return React.createElement(components_1.Button, { onClick: function () { return console.log('click button'); } }, "Basic");
};
exports.Type = function () {
    return (React.createElement("div", { className: 'code-demo' },
        React.createElement(components_1.Button, { type: 'primary' }, "primary"),
        React.createElement(components_1.Button, { type: 'link' }, "link"),
        React.createElement(components_1.Button, null, "default"),
        React.createElement(components_1.Button, { type: 'dashed' }, "dashed"),
        React.createElement(components_1.Button, { type: 'danger' }, "danger")));
};
exports.Size = function () {
    return (React.createElement("div", { className: 'code-demo' },
        React.createElement(components_1.Button, null, "default"),
        React.createElement(components_1.Button, { size: 'large' }, "large"),
        React.createElement(components_1.Button, { size: 'small' }, "small")));
};
exports.Shape = function () {
    return (React.createElement("div", { className: 'code-demo' },
        React.createElement(components_1.Button, null, "default"),
        React.createElement(components_1.Button, { shape: 'circle' }, "circle"),
        React.createElement(components_1.Button, { shape: 'round' }, "round")));
};
exports.Link = function () {
    return React.createElement(components_1.Button, { type: 'link', href: 'http://baidu.com' }, "to baidu");
};
exports.Block = function () {
    return (React.createElement("div", { className: 'code-demo' },
        React.createElement(components_1.Button, null, "default"),
        React.createElement(components_1.Button, { block: true }, "block")));
};
