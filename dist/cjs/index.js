'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Default"] = "default";
    ButtonSize["Large"] = "large";
    ButtonSize["Small"] = "small";
})(ButtonSize || (ButtonSize = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType["Default"] = "default";
    ButtonType["Primary"] = "primary";
    ButtonType["Danger"] = "danger";
    ButtonType["Link"] = "link";
    ButtonType["Dashed"] = "dashed";
})(ButtonType || (ButtonType = {}));
var ButtonShape;
(function (ButtonShape) {
    ButtonShape["Default"] = "default";
    ButtonShape["Circle"] = "circle";
    ButtonShape["Round"] = "round";
})(ButtonShape || (ButtonShape = {}));

var Button = function (_a) {
    var _b;
    var type = _a.type, size = _a.size, shape = _a.shape, disabled = _a.disabled, href = _a.href, block = _a.block, htmlType = _a.htmlType, children = _a.children, className = _a.className, style = _a.style, onClick = _a.onClick;
    var classes = classNames__default['default']('awesome-button', (_b = {},
        _b["awesome-button-" + type] = type && type !== ButtonType.Default,
        _b["awesome-button-" + size] = size && size !== ButtonSize.Default,
        _b["awesome-button-" + shape] = shape && shape !== ButtonShape.Default,
        _b['awesome-button-disabled'] = disabled,
        _b['awesome-button-block'] = block,
        _b[className || ''] = Boolean(className),
        _b));
    if (type === ButtonType.Link) {
        return (React__default['default'].createElement("a", { className: classes, href: href, style: style, onClick: function (e) {
                if (disabled) {
                    e.preventDefault();
                }
                if (onClick) {
                    onClick(e);
                }
            } }, children));
    }
    return (React__default['default'].createElement("button", { className: classes, style: style, type: htmlType, onClick: onClick, disabled: disabled }, children));
};
Button.defaultProps = {
    type: ButtonType.Default,
    size: ButtonSize.Default,
    shape: ButtonShape.Default,
    disabled: false,
    block: false
};

exports.Button = Button;
