'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the findLonely function below.
function findLonely(arr) {
    let arrHash = {};
    for (let i = 0; i < arr.length; i++) {
        if (arrHash[arr[i]]) {
            delete arrHash[arr[i]];
        } else {
            arrHash[arr[i]] = 1;
        }
    }

    let hashVals = Object.keys(arrHash);
    return hashVals.length ? hashVals[0] : 0;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = findLonely(arr);

    ws.write(res + '\n');

    ws.end();
}

