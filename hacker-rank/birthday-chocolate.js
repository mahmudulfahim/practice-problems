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

// Complete the birthday function below.
function birthday(s, d, m) {
    let countArray = {};
    for (let i = 0; i < s.length; i++) {
        let sum = 0;
        let sumString = '';
        let counter = 0;
        for (let j = i; j < s.length; j++) {
            sum += s[j];
            sumString += s[j] + ':';
            counter++;
            console.log(s[j], sum, sumString);
            if (sum == d && counter == m && !countArray.hasOwnProperty(sumString)) {
                countArray[sumString] = 1;
            } else if (sum > d) {
                break;
            }
        }
    }

    return Object.keys(countArray).length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const dm = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(dm[0], 10);

    const m = parseInt(dm[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}

