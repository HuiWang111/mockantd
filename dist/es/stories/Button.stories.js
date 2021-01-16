/* eslint-disable no-console */
import * as React from 'react';
import { Button } from '../components';
import './styles/button.less';
export default {
    title: 'Button',
    component: Button
};
export const Basic = () => {
    return React.createElement(Button, { onClick: () => console.log('click button') }, "Basic");
};
export const Type = () => {
    return (React.createElement("div", { className: 'code-demo' },
        React.createElement(Button, { type: 'primary' }, "primary"),
        React.createElement(Button, { type: 'link' }, "link"),
        React.createElement(Button, null, "default"),
        React.createElement(Button, { type: 'dashed' }, "dashed"),
        React.createElement(Button, { type: 'danger' }, "danger")));
};
export const Size = () => {
    return (React.createElement("div", { className: 'code-demo' },
        React.createElement(Button, null, "default"),
        React.createElement(Button, { size: 'large' }, "large"),
        React.createElement(Button, { size: 'small' }, "small")));
};
export const Shape = () => {
    return (React.createElement("div", { className: 'code-demo' },
        React.createElement(Button, null, "default"),
        React.createElement(Button, { shape: 'circle' }, "circle"),
        React.createElement(Button, { shape: 'round' }, "round")));
};
export const Link = () => {
    return React.createElement(Button, { type: 'link', href: 'http://baidu.com' }, "to baidu");
};
export const Block = () => {
    return (React.createElement("div", { className: 'code-demo' },
        React.createElement(Button, null, "default"),
        React.createElement(Button, { block: true }, "block")));
};
