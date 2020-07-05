import React from 'react';

export interface IButtonProps {
    type?: 'danger' | 'dashed' | 'default' | 'link' | 'primary';
    size?: 'default' | 'large' | 'small';
    shape?: 'default' | 'circle' | 'round';
    disabled?: boolean;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void;
    block?: boolean;
    htmlType?: 'button' | 'submit' | 'reset';
    className?: string;
    style?: React.CSSProperties;
}