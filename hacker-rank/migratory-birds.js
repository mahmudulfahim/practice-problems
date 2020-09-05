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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    var countArray = {};
    var max = -1;
    var maxValue = '';
    for (let i = 0; i < arr.length; i++) {
        if (countArray.hasOwnProperty(arr[i])) {
            countArray[arr[i]] = countArray[arr[i]] + 1;
        } else {
            countArray[arr[i]] = 1;
        }

        if (countArray[arr[i]] >= max) {
            if (maxValue == '' || (countArray[arr[i]] > max) || (maxValue != '' && arr[i] < maxValue)) {
                maxValue = arr[i];
            }
            max = countArray[arr[i]];
            console.log(max, maxValue, arr[i])

        }


    }

    return maxValue;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}

