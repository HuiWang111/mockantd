/* eslint-disable no-console */
import * as React from 'react';
import { Button } from '../components';
import './styles/button.less';

export default {
    title: 'Button',
    component: Button
};

export const Basic = (): React.ReactNode => {
    return <Button onClick={() => console.log('click button')}>Basic</Button>
}

export const Type = (): React.ReactNode => {
    return (
        <div className='code-demo'>
            <Button type='primary'>primary</Button>
            <Button type='link'>link</Button>
            <Button>default</Button>
            <Button type='dashed'>dashed</Button>
            <Button type='danger'>danger</Button>
        </div>
    );
}

export const Size = (): React.ReactNode => {
    return (
        <div className='code-demo'>
            <Button>default</Button>
            <Button size='large'>large</Button>
            <Button size='small'>small</Button>
        </div>
    );
}

export const Shape = (): React.ReactNode => {
    return (
        <div className='code-demo'>
            <Button>default</Button>
            <Button shape='circle'>circle</Button>
            <Button shape='round'>round</Button>
        </div>
    );
}

export const Link = (): React.ReactNode => {
    return <Button type='link' href='http://baidu.com'>to baidu</Button>
}

export const Block = (): React.ReactNode => {
    return (
        <div className='code-demo'>
            <Button>default</Button>
            <Button block>block</Button>
        </div>
    );
}
 