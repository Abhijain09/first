console.log("ES6")

const arr = [11, 12, 13, 14, 15];

const [one, two, three, four] = arr; //ES6 Destructuring of an array

console.log(two)

function getscore() {
    return [90, 100];
}

let [x, y, z] = getscore();
console.log(x)
console.log(y)
console.log(z)


const obj = {
    fullname: "Abhinandan Jain",
    email: "abhijain092000@gmail.com",
    age: 21
}
console.log(obj.email)

let { fullname, email, age, dum } = obj;
//if we change variable order it doesn't change value it work smarter.
//let { name, age, email, dum } = obj;
//we have to give same name as creating object elements.
console.log(age)
console.log(dum)

let person = {
    firstname: "Abhinandan",
    lastname: "Jain",
    age1: 21,
    middlename: "kumar"
}

let { firstname, lastname, age1, middlename = "" } = person;
console.log(middlename)

//ES6 arrow function

// let add = function(x, y) {
//     return x + y;
// }
let add = (x, y) => x + y;
console.log(add(10, 20))

// we don't need to use '{' or return statement in one or single expression.

// we have two or more expression we have to use return '{'
let sub = (x, y) => {
    console.log(x);
    return (x - y);
}
console.log(sub(40, 20));

const counter = {
    count: 0,
    next: function() {
        return ++(this.count);
    }
}
console.log(counter.next());

//output=>1

// 'this' keyword we have to use in function else it will point to browser
//                                      MAP

// 1.Value
const arr1 = [10, 20, 30];
const newArr = arr1.map((e) => e + 1);
console.log(newArr);


// 2.index
const newArr1 = arr1.map((e, i) => i);
console.log(newArr1);


// 2Darray
const newArr2 = arr1.map((e, i, b) => b);
console.log(newArr2);

//                      filter
let filterArr = [1, 2, 3, 4];
const newFilterArr = filterArr.filter((value) => {
    if (value % 2 == 0) {
        return value;
    }
});
console.log(newFilterArr);

let mapArr = [1, 2, 3, 4];
const newMapArr = mapArr.map((value) => {
    if (value % 2 == 0) {
        return value;
    }
});
console.log(newMapArr);


//          promise
let concert = false;
let attendConcert = new Promise(function(fulfill, reject) {
    setTimeout(() => {
        if (concert) { fulfill("Naveen ATTENDED THE CONCERT"); } else {
            reject("Failed to attend the concert");
        }
    }, 200);
});
console.log(attendConcert);

// attendConcert.then((data) => console.log(data));
// attendConcert.catch((error) => console.log(error));

attendConcert.then((data) => console.log(data)).catch((error) => console.log(error));