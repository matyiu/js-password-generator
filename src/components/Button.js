import React from 'react';

import './Button.css';

function Button(props) {
    const { types = [], disabled } = props;
    const typeClasses = types.map(type => 'button--' + type);
    const className = ['button', ...typeClasses].join(' ');

    return (
        <button className={className} onClick={props.onClick} disabled={disabled}>
            {props.children}
        </button>
    );
}

export default Button;