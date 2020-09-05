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

// Complete the repeatedString function below.
function repeatedString(s, n) {

    let noOfRepeats = parseInt(n / s.length);
    let remainingLength = n % s.length;
    let noOfOccuranceInS = (s.match(/a/g) || []).length;
    console.log(noOfOccuranceInS);
    let totalOccur = noOfOccuranceInS * noOfRepeats + (s.substring(0, remainingLength).match(/a/g) || []).length;

    return totalOccur;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}

