import React from 'react';

import './Checkbox.css';

function Checkbox(props) {
    const { title, value } = props

    return (
        <div className="checkbox">
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

export default Checkbox;