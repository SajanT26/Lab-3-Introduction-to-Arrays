let myArray = [66, "blue", 11, "purple", 58]
console.log(myArray)
console.log(myArray.at(0));
console.log(myArray.at(-1))
console.log(myArray.at(3))
console.log(myArray.length)

let myArray2 = [65, "red", 7, "brown", 98];
let lastmyArray2 = myArray2.pop();
console.log(lastmyArray2);
console.log(myArray2)
myArray2.push("purple")
console.log(myArray2)
let number = myArray2.slice(2,3);
console.log(number);
for(let i = 0; i <myArray.length; i++) {
    console.log(myArray[i]);
}

const iterator = myArray2.entries();
for (let e of iterator) {
    console.log(e);
}

let a = 3, b = 6, c = 9;
[b,a,c] = [a,b,c];
console.log(a)
console.log(b)
console.log(c)