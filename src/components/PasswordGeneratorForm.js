import React, { useState } from 'react';
import InputRange from './InputRange';
import Checkbox from './Checkbox';
import Button from './Button';

import './PasswordGeneratorForm.css';
import { generatePassword } from '../utils/generatePassword';

function PasswordGeneratorForm(props) {
    const [passwordLength, setPasswordLength] = useState(12);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [password, setPassword] = useState('');
    const [copyStatus, setCopyStatus] = useState(false);

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

    function handlePasswordGenerator() {
        const options = {
            length: passwordLength,
            uppercase,
            lowercase,
            symbols
        }

        setPassword(generatePassword(options));
    }

    function handleCopyToClipboard() {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(password);
        } else {
            const input = document.createElement('input');
            input.style.display = 'none';
            input.value = password;
            input.select();
            document.execCommand('copy');
        }

        setCopyStatus(true);
        setTimeout(() => {
            setCopyStatus(false);
        }, 3500);
    }

    return (
        <div className="password-generator">
            <h1 className="password-generator__title">Random Password Generator</h1>
            <div className="password-generator__password-group">
                <span className="password-generator__password">{password}</span>
                <Button types={['primary', 'border-primary', 'copy']} onClick={handleCopyToClipboard}>
                    {copyStatus ? 'Copied' : 'Copy'}
                </Button>
            </div>
            <InputRange min={12} max={36} step={1} title="Password Length:"
            currState={passwordLength} onChange={handlePasswordLength} />
            <Checkbox title="Include Uppercase?" onChange={handleUppercase}
            value={uppercase} />
            <Checkbox title="Include Lowercase?" onChange={handleLowercase}
            value={lowercase} />
            <Checkbox title="Include Symbols" onChange={handleSymbols}
            value={symbols} />
            <Button types={['primary']} onClick={handlePasswordGenerator}>Generate</Button>
        </div>
    );
}

export default PasswordGeneratorForm;