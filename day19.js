console.log("ES6");

const arr = [11, 12, 13, 14, 15];

const [one, two, three, four] = arr; //ES6 Destructuring of an array

console.log(two);

function getscore() {
    return [90, 100];
}

let [x, y, z] = getscore();
console.log(x);
console.log(y);
console.log(z);