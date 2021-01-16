import React from 'react';
import classNames from 'classnames';
import { ButtonType, ButtonSize, ButtonShape } from './enums';
import './styles/button.less';
export const Button = ({ type, size, shape, disabled, href, block, htmlType, children, className, style, onClick }) => {
    const classes = classNames('awesome-button', {
        [`awesome-button-${type}`]: type && type !== ButtonType.Default,
        [`awesome-button-${size}`]: size && size !== ButtonSize.Default,
        [`awesome-button-${shape}`]: shape && shape !== ButtonShape.Default,
        'awesome-button-disabled': disabled,
        'awesome-button-block': block,
        [className || '']: Boolean(className)
    });
    if (type === ButtonType.Link) {
        return (React.createElement("a", { className: classes, href: href, style: style, onClick: (e) => {
                if (disabled) {
                    e.preventDefault();
                }
                if (onClick) {
                    onClick(e);
                }
            } }, children));
    }
    return (React.createElement("button", { className: classes, style: style, type: htmlType, onClick: onClick, disabled: disabled }, children));
};
Button.defaultProps = {
    type: ButtonType.Default,
    size: ButtonSize.Default,
    shape: ButtonShape.Default,
    disabled: false,
    block: false
};
