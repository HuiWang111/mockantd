"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var enums_1 = require("./enums");
require("./styles/button.less");
exports.Button = function (_a) {
    var _b;
    var type = _a.type, size = _a.size, shape = _a.shape, disabled = _a.disabled, href = _a.href, block = _a.block, htmlType = _a.htmlType, children = _a.children, className = _a.className, style = _a.style, onClick = _a.onClick;
    var classes = classnames_1.default('awesome-button', (_b = {},
        _b["awesome-button-" + type] = type && type !== enums_1.ButtonType.Default,
        _b["awesome-button-" + size] = size && size !== enums_1.ButtonSize.Default,
        _b["awesome-button-" + shape] = shape && shape !== enums_1.ButtonShape.Default,
        _b['awesome-button-disabled'] = disabled,
        _b['awesome-button-block'] = block,
        _b[className || ''] = Boolean(className),
        _b));
    if (type === enums_1.ButtonType.Link) {
        return (react_1.default.createElement("a", { className: classes, href: href, style: style, onClick: function (e) {
                if (disabled) {
                    e.preventDefault();
                }
                if (onClick) {
                    onClick(e);
                }
            } }, children));
    }
    return (react_1.default.createElement("button", { className: classes, style: style, type: htmlType, onClick: onClick, disabled: disabled }, children));
};
exports.Button.defaultProps = {
    type: enums_1.ButtonType.Default,
    size: enums_1.ButtonSize.Default,
    shape: enums_1.ButtonShape.Default,
    disabled: false,
    block: false
};
