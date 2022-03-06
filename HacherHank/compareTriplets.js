// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=false
const alice = [2, 2, 3];
const bob = [1, 2, 4];

console.log(compareTriplets(alice, bob));

function compareTriplets(a, b) {
    let alice = [],
        bob = [],
        result = [],
        aliceTotal = 0,
        bobTotal = 0;

    if (a[0] > b[0]) {
        aliceTotal += 1;
    } 
    else if(a[0] < b[0]) {
        bobTotal += 1;
    }

    if (a[1] > b[1]) {
        aliceTotal += 1;
    } 
    else if(a[1] < b[1]) {
        bobTotal += 1;
    }

    if (a[2] < b[2]) {
        bobTotal += 1;
    } 
    else if(a[2] > b[2]) {
        aliceTotal += 1;
    }

    alice[0] = aliceTotal;
    bob[0] = bobTotal;

    return (result = [alice, bob]);
}
