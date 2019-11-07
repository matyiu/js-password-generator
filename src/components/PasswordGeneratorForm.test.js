import React from 'react';
import { render, fireEvent, cleanup } from "@testing-library/react";
import PasswordGeneratorForm from './PasswordGeneratorForm';
import crypto from 'crypto';
import { getSymbols } from '../utils/generatePassword';

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomFillSync(arr),
  },
});

function getPasswordArray(genButton, passwordField) {
    const passArray = [];

    for(let i = 0; i < 100; i++) {
        fireEvent.click(genButton);
        passArray.push(passwordField.textContent);
    }

    return passArray;
}

function typedArrayToString(typedArr) {
    return String.fromCharCode.apply(null, typedArr);
}

describe('PasswordGeneratorForm', () => {
    let renderObj, genButton, passwordField;

    beforeEach(() => {
        renderObj = render(<PasswordGeneratorForm />);
        const { container, getByText } = renderObj;
        genButton = getByText('Generate');
        passwordField = container.querySelector('.password-generator__password');
    })
    afterEach(cleanup);
    
    const strSymbols = typedArrayToString(getSymbols()).replace(
        /[.*+?^${}()|[\]\\]/g, '\\$&'
    );
    const options = [/[A-Z]/, /[a-z]/, 
        new RegExp(`[${strSymbols}]`)];
    
    it.each(options)('should generate password based on %s pattern', (pattern) => {
        expect(getPasswordArray(genButton, passwordField).some(
            pass => pattern.test(pass)
        )).toBeTruthy();
    });
    
    it.each(options)('should not generate password with %s pattern', (pattern) => {
        const { getByText } = renderObj;

        const uppercase = getByText(/Uppercase/).nextSibling;
        const lowercase = getByText(/Lowercase/).nextSibling;
        const symbols = getByText(/Symbols/).nextSibling;

        fireEvent.click(uppercase);
        fireEvent.click(lowercase);
        fireEvent.click(symbols);
        expect(getPasswordArray(genButton, passwordField).every(
            pass => !pattern.test(pass)
        )).toBeTruthy();
    });
});