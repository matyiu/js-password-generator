function generateArrayFromRange(obj) {
    const result = [];
    for(let i = obj.from; i <= obj.to; i++) {
        result.push(i);
    }

    return result;
}

const passwordOptions = {
    uppercase: () => {
        return generateArrayFromRange({from: 65, to: 90});
    },
    lowercase: () => {
        return generateArrayFromRange({from: 97, to: 122});
    },
    symbols: () => {
        return [
            ...generateArrayFromRange({from: 33, to: 47}),
            ...generateArrayFromRange({from: 58, to: 64}),
            ...generateArrayFromRange({from: 91, to: 96}),
            ...generateArrayFromRange({from: 123, to: 126})
        ];
    },
    numbers: () => {
        return generateArrayFromRange({from: 48, to: 57});
    }
}

function getASCIIRangeFromOptions(options) {
    let range = passwordOptions.numbers();

    for (const option in options) {
        if (options[option]) {
            range = range.concat(passwordOptions[option]());
        }
    }

    return range;
}

function generatePassword(options) {
    const { length, ...rangeOptions } = options;
    const range = getASCIIRangeFromOptions(rangeOptions);

    function generateFilteredBinaryArray() {
        const binaryArray = new Uint8Array(length);
        crypto.getRandomValues(binaryArray);

        return binaryArray.filter(num => range.indexOf(num) > -1);
    }

    let password = '';
    while(password.length < length) {
        password += String.fromCharCode.apply(null, generateFilteredBinaryArray());
    }

    return password.slice(0, length);
}

const getSymbols = passwordOptions.symbols;

export {
    generatePassword, 
    getSymbols
};