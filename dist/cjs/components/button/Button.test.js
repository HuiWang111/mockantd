"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var Button_1 = require("./Button");
var defaultButtonProps = {
    onClick: jest.fn()
};
var testButtonProps = {
    type: 'primary',
    size: 'large',
    shape: 'circle',
    block: true,
    className: 'custom-button',
    style: {
        fontSize: '18px'
    }
};
var disabledButtonProps = {
    disabled: true,
    onClick: jest.fn()
};
var disabledLinkButtonProps = {
    type: 'link',
    disabled: true,
    onClick: jest.fn()
};
describe('test Button component', function () {
    it('should render this correct default Button', function () {
        var wrapper = react_2.render(react_1.default.createElement(Button_1.Button, __assign({}, defaultButtonProps), "awesome button"));
        var element = wrapper.getByText('awesome button');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('awesome-button');
        expect(element.disabled).toBeFalsy();
        react_2.fireEvent.click(element);
        expect(defaultButtonProps.onClick).toHaveBeenCalled();
    });
    it('should render this correct Button based on different props', function () {
        var wrapper = react_2.render(react_1.default.createElement(Button_1.Button, __assign({}, testButtonProps), "custom button"));
        var element = wrapper.getByText('custom button');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('awesome-button awesome-button-primary awesome-button-large awesome-button-circle awesome-button-block custom-button');
        expect(element.disabled).toBeFalsy();
    });
    it('should render a link when type equals link', function () {
        var href = 'http://www.baidu.com';
        var wrapper = react_2.render(react_1.default.createElement(Button_1.Button, { type: 'link', href: href }, "awesome link button"));
        var element = wrapper.getByText('awesome link button');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('A');
        expect(element).toHaveClass('awesome-button awesome-button-link');
        expect(element).not.toHaveClass('awesome-button-disabled');
        expect(element.getAttribute('href')).toEqual(href);
    });
    it('should render disabled button when disabled set to true', function () {
        var wrapper = react_2.render(react_1.default.createElement(Button_1.Button, __assign({}, disabledButtonProps), "awesome disabled button"));
        var element = wrapper.getByText('awesome disabled button');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element.disabled).toBeTruthy();
        react_2.fireEvent.click(element);
        expect(disabledButtonProps.onClick).not.toHaveBeenCalled();
        var linkWrapper = react_2.render(react_1.default.createElement(Button_1.Button, __assign({}, disabledLinkButtonProps), "awesome disabled link button"));
        var linkElement = linkWrapper.getByText('awesome disabled link button');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.tagName).toEqual('A');
        expect(linkElement).toHaveClass('awesome-button-disabled');
        react_2.fireEvent.click(linkElement);
        expect(disabledLinkButtonProps.onClick).toHaveBeenCalled();
    });
});
