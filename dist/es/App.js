import React from 'react';
import ButtonContainer from './demos/Button';
import './styles/app.less';
const App = () => {
    return (React.createElement("div", { className: 'app-container' },
        React.createElement(ButtonContainer, null)));
};
export default App;
