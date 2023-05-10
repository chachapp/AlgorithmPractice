// A function that calculates the sum of all numbers
// from 1 up to som number n

function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;      
    }
    return total;
};

function addUpTo2(n) {
    return n * (n + 1) / 2;
}

function countUpAndDown(n) {
    console.log("Going up!");

    for (let i = 0; i < n; i++) {
        console.log(i);    
    }

    console.log("At the top?\n Going down..");

    for (let j = 0; j < n; j++) {
        console.log(j);
    }

    console.log("Back down, bye!");
}


let t1 = performance.now();
//addUpTo(1000000000);
addUpTo2(1000000000);

let t2 = performance.now();
console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds`);
