import { MouseEventHandler } from 'react';

export const stopPropagationMethod: MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
};
