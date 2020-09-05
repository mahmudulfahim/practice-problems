'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function isValid(s) {
    let parenthesisArray = [];
    let startBraces = ['(', '{', '['];
    let endBraces = [')', '}', ']'];

    for (let i = 0; i < s.length; i++) {
        if (startBraces.includes(s[i])) {
            parenthesisArray.push(s[i]);
        } else {
            if (i == 0 && endBraces.includes(s[i])) {
                return false;
            } else if (i > 0 && parenthesisArray[parenthesisArray.length - 1] != startBraces[endBraces.indexOf(s[i])]) {
                return false;
            } else {
                parenthesisArray.pop();
            }
        }
    }

    return parenthesisArray.length > 0 ? false : true;

};


function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const expression = readLine();
        let result = isValid(expression);
        if (result) {
            console.log('YES');
        } else {
            console.log('NO')
        }
    }


}

