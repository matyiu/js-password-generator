import React from 'react';

import './Checkbox.css';

function Checkbox(props) {
    const { title, value, types } = props
    const className = ['checkbox'].concat(types.map(type => 'checkbox--' + type))
    .join(' ');

    return (
        <div className={className}>
            <span className="checkbox__title">{title}</span>
            <label>
                <input type="checkbox" onChange={props.onChange} className="checkbox__input"
                checked={value} />
                <div className="checkbox__container">
                    <div className="checkbox__toggle"></div>
                </div>
            </label>
        </div>
    );
}

Checkbox.defaultProps = {
    types: []
}

export default Checkbox;