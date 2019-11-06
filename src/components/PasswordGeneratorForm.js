import React, { useState } from 'react';
import InputRange from './InputRange';
import Checkbox from './Checkbox';
import Button from './Button';

import './PasswordGeneratorForm.css';

function PasswordGeneratorForm(props) {
    const [passwordLength, setPasswordLength] = useState(12);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [symbols, setSymbols] = useState(true);

    function handlePasswordLength(e) {
        setPasswordLength(e.target.value);
    }

    function handleUppercase() {
        setUppercase(!uppercase);
    }

    function handleLowercase() {
        setLowercase(!lowercase);
    }

    function handleSymbols() {
        setSymbols(!symbols);
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
            <Checkbox title="Include Uppercase?" onChange={handleUppercase}
            value={uppercase} />
            <Checkbox title="Include Lowercase?" onChange={handleLowercase}
            value={lowercase} />
            <Checkbox title="Include Symbols" onChange={handleSymbols}
            value={symbols} />
            <Button types={['primary']}>Generate</Button>
        </div>
    );
}

export default PasswordGeneratorForm;