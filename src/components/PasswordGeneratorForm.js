import React, { useState } from 'react';
import InputRange from './InputRange';
import Checkbox from './Checkbox';
import Button from './Button';

import './PasswordGeneratorForm.css';

function PasswordGeneratorForm(props) {
    const [passwordLength, setPasswordLength] = useState(12);

    function handlePasswordLength(e) {
        setPasswordLength(e.target.value);
    }

    return (
        <div className="password-generator">
            <h1 className="password-generator__title">Random Password Generator</h1>
            <div className="password-generator__password-group">
                <span className="password-generator__password"></span>
                <Button types={['primary', 'border-primary', 'copy']}>Copy</Button>
            </div>
            <InputRange min={12} max={36} step={1} title="Password Length:"
            currState={passwordLength} onChange={handlePasswordLength} />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Button types={['primary']}>Generate</Button>
        </div>
    );
}

export default PasswordGeneratorForm;