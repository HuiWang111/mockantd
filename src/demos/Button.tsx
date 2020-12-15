import React from 'react';
import { Button } from '../components';

const ButtonContainer: React.FC = () => {
    return (
        <div className='button-container'>
            <div className='button-wrapper'>
                <Button>Default</Button>
                <Button type='primary'>Primary</Button>
                <Button type='danger'>Danger</Button>
                <Button type='dashed'>Dashed</Button>
                <Button type='link'>Link</Button>
            </div>
            <div className='button-wrapper'>
                <Button size='small'>Default</Button>
                <Button type='primary' size='small'>Primary</Button>
                <Button type='danger' size='small'>Danger</Button>
                <Button type='dashed' size='small'>Dashed</Button>
                <Button type='link' size='small' href='http://www.baidu.com'>Link</Button>
            </div>
            <div className='button-wrapper'>
                <Button size='large'>Default</Button>
                <Button type='primary' size='large'>Primary</Button>
                <Button type='danger' size='large'>Danger</Button>
                <Button type='dashed' size='large'>Dashed</Button>
                <Button type='link' size='large' href='http://www.baidu.com'>Link</Button>
            </div>
            <div className='button-wrapper'>
                <Button size='small' shape='circle'>A</Button>
                <Button type='primary' size='small' shape='circle'>B</Button>
                <Button type='danger' shape='circle'>C</Button>
                <Button type='dashed' size='large' shape='circle'>D</Button>
                <Button type='link' size='large' shape='circle'>E</Button>
            </div>
            <div className='button-wrapper'>
                <Button size='small' shape='round'>Default</Button>
                <Button type='primary' size='small' shape='round'>Primary</Button>
                <Button type='danger' shape='round'>Danger</Button>
                <Button type='dashed' size='large' shape='round'>Dashed</Button>
                <Button type='link' size='large' shape='round'>Link</Button>
            </div>
            <div className='button-wrapper'>
                <Button size='small' disabled>Default</Button>
                <Button type='primary' size='small' disabled>Primary</Button>
                <Button type='danger' disabled>Danger</Button>
                <Button type='dashed' size='large' disabled>Dashed</Button>
                <Button type='link' size='large' disabled href='http://www.baidu.com'>Link</Button>
            </div>
            <div className='button-wrapper'>
                <Button size='small' disabled block>Default</Button>
                <Button size='small' block>Default</Button>
                <Button type='primary' size='small' block>Primary</Button>
                <Button type='danger' block>Danger</Button>
                <Button type='dashed' size='large' block>Dashed</Button>
                <Button type='link' size='large' block href='http://www.baidu.com'>Link</Button>
            </div>
        </div>
    );
}

export default ButtonContainer;