import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { ButtonType, ButtonSize, ButtonShape } from './enums';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({
    type,
    size,
    shape,
    disabled,
    href,
    onClick,
    block,
    htmlType,
    children,
    className,
    style
}: PropsWithChildren<IButtonProps>) => {
    const classes = classNames('awesome-button', {
        [`awesome-button-${type}`]: type && type !== ButtonType.Default,
        [`awesome-button-${size}`]: size && size !== ButtonSize.Default,
        [`awesome-button-${shape}`]: shape && shape !== ButtonShape.Default,
        'awesome-button-disabled': disabled,
        'awesome-button-block': block,
        [className || '']: !!className
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

export default Button;
