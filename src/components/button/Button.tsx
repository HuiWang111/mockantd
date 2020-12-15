import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { ButtonType, ButtonSize, ButtonShape } from './enums';
import { ButtonProps } from './types';
import './styles/button.less';

export const Button: React.FC<ButtonProps> = ({
    type,
    size,
    shape,
    disabled,
    href,
    block,
    htmlType,
    children,
    className,
    style,
    onClick
}: PropsWithChildren<ButtonProps>) => {
    const classes = classNames('awesome-button', {
        [`awesome-button-${type}`]: type && type !== ButtonType.Default,
        [`awesome-button-${size}`]: size && size !== ButtonSize.Default,
        [`awesome-button-${shape}`]: shape && shape !== ButtonShape.Default,
        'awesome-button-disabled': disabled,
        'awesome-button-block': block,
        [className || '']: Boolean(className)
    });

    if (type === ButtonType.Link) {
        return (
            <a
                className={classes}
                href={href}
                style={style}
                onClick={(e) => {
                    if (disabled) {
                        e.preventDefault();
                    }

                    if (onClick) {
                        onClick(e);
                    }
                }}
            >
                { children }
            </a>
        );
    }

    return (
        <button
            className={classes}
            style={style}
            type={htmlType}
            onClick={onClick}
            disabled={disabled}
        >
            { children }
        </button>
    );
}

Button.defaultProps = {
    type: ButtonType.Default,
    size: ButtonSize.Default,
    shape: ButtonShape.Default,
    disabled: false,
    block: false
};
