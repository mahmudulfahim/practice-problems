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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairings = {};

    for (let sock of ar) {
        if (pairings.hasOwnProperty(sock)) {
            pairings[sock] = pairings[sock] + 1;
        } else {
            pairings[sock] = 1;
        }
    }
    let totalPairs = 0;
    console.log(pairings);
    Object.keys(pairings).forEach(pair => {
        totalPairs += Math.floor(pairings[pair] / 2);
    });

    return totalPairs;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}

