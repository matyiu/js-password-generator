import React from 'react';

import './InputRange.css';

function InputRange(props) {
    const { min, max, step, title, currState } = props;

    return (
        <div className="input-range">
            <span className="input-range__title-indicator">{`${title} ${currState}`}</span>
            <div className="input-range__input">
                <span className="input-range__limit">{min}</span>
                <input type="range" min={min} max={max} step={step}
                className="input-range__slider" onChange={props.onChange}
                value={currState} />
                <span className="input-range__limit">{max}</span>
            </div>
        </div>
    );
}

export default InputRange;