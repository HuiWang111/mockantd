import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
const defaultButtonProps = {
    onClick: jest.fn()
};
const testButtonProps = {
    type: 'primary',
    size: 'large',
    shape: 'circle',
    block: true,
    className: 'custom-button',
    style: {
        fontSize: '18px'
    }
};
const disabledButtonProps = {
    disabled: true,
    onClick: jest.fn()
};
const disabledLinkButtonProps = {
    type: 'link',
    disabled: true,
    onClick: jest.fn()
};
describe('test Button component', () => {
    it('should render this correct default Button', () => {
        const wrapper = render(React.createElement(Button, Object.assign({}, defaultButtonProps), "awesome button"));
        const element = wrapper.getByText('awesome button');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('awesome-button');
        expect(element.disabled).toBeFalsy();
        fireEvent.click(element);
        expect(defaultButtonProps.onClick).toHaveBeenCalled();
    });
    it('should render this correct Button based on different props', () => {
        const wrapper = render(React.createElement(Button, Object.assign({}, testButtonProps), "custom button"));
        const element = wrapper.getByText('custom button');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('awesome-button awesome-button-primary awesome-button-large awesome-button-circle awesome-button-block custom-button');
        expect(element.disabled).toBeFalsy();
    });
    it('should render a link when type equals link', () => {
        const href = 'http://www.baidu.com';
        const wrapper = render(React.createElement(Button, { type: 'link', href: href }, "awesome link button"));
        const element = wrapper.getByText('awesome link button');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('A');
        expect(element).toHaveClass('awesome-button awesome-button-link');
        expect(element).not.toHaveClass('awesome-button-disabled');
        expect(element.getAttribute('href')).toEqual(href);
    });
    it('should render disabled button when disabled set to true', () => {
        const wrapper = render(React.createElement(Button, Object.assign({}, disabledButtonProps), "awesome disabled button"));
        const element = wrapper.getByText('awesome disabled button');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(disabledButtonProps.onClick).not.toHaveBeenCalled();
        const linkWrapper = render(React.createElement(Button, Object.assign({}, disabledLinkButtonProps), "awesome disabled link button"));
        const linkElement = linkWrapper.getByText('awesome disabled link button');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.tagName).toEqual('A');
        expect(linkElement).toHaveClass('awesome-button-disabled');
        fireEvent.click(linkElement);
        expect(disabledLinkButtonProps.onClick).toHaveBeenCalled();
    });
});
