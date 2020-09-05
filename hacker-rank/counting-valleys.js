'use strict';

const fs = require('fs');

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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let valleysCount = 0;
    let sA = s.split('');
    let currentLevel = 0;
    for (let i = 0; i < n; i++) {
        let cCL = currentLevel;
        if (sA[i] == 'D') {
            currentLevel--;
        } else if (sA[i] == 'U') {
            currentLevel++;
        }
        if (currentLevel == 0 && cCL < 0 && i + 1 < n && sA[i] != sA[i + 1]) {
            valleysCount++;
        } else if (currentLevel == 0 && cCL < 0) {
            valleysCount++;
        }
    }
    return valleysCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}

