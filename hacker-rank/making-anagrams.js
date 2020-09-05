'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let hashA = {};
    for (let i = 0; i < a.length; i++) {
        hashA[a[i]] = hashA[a[i]] ? ++hashA[a[i]] : 1;
    }
    let commons = {};
    let commonsCounts = 0;
    for (let i = 0; i < b.length; i++) {
        if (hashA[b[i]] && (!commons[b[i]] || (commons[b[i]] && commons[b[i]] < hashA[b[i]]))) {
            commons[b[i]] = commons[b[i]] ? ++commons[b[i]] : 1;
            commonsCounts++
        }
    }
    //console.log(commons, commonsCounts);
    return a.length + b.length - 2 * commonsCounts

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}

