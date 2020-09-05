'use strict';

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

// Complete the countSwaps function below.
function countSwaps(a) {
    let isSorted = false;
    let totalSwaps = 0;
    while (!isSorted) {
        let currentSwaps = 0;
        for (let i = 0; i < a.length - 1; i++) {
            let curVal = a[i];
            let nextVal = a[i + 1];

            if (curVal > nextVal) {
                a[i] = nextVal;
                a[i + 1] = curVal;
                totalSwaps++;
                currentSwaps++;
            }
        }
        if (!currentSwaps) {
            isSorted = true;
        }
    }

    console.log(`Array is sorted in ${totalSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);

}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}

