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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let maxVal = 0;
    let newArray = [];
    for (let i = 0; i < queries.length; i++) {
        let minIndex = parseInt(queries[i][0]) - 1;
        let maxIndex = parseInt(queries[i][1]);
        let add = parseInt(queries[i][2]);
        newArray[minIndex] = newArray[minIndex] ? newArray[minIndex] + add : add;
        newArray[maxIndex] = newArray[maxIndex] ? newArray[maxIndex] + -1 * add : -1 * add;
    }

    let sum = 0;
    for (let j = 0; j < n; j++) {
        sum += newArray[j] ? newArray[j] : 0;
        if (sum > maxVal) {
            maxVal = sum;
        }
    }

    return maxVal;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}

