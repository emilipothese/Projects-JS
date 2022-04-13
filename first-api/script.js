// Object
const obj1 = {
  "first" : "Laurence",
  "last" : "D'Arabie",
  "num" : 100,
  "nu" : null,
  "arr" : [],
  "obj" : {}
};

console.log(obj1);
console.log(obj1.first);
console.log(obj1["first"]);

// Array
const arr = ["Laurence", 100, true, null, {
  "first" : "Laurence",
  "last" : "D'arabie"
}, "Laurence", "Laurence", "Laurence"];

console.log(arr);
console.log(arr[2]);
console.log(arr[4].last);


// Loop
const obj3 = {
  "first" : "Laurence",
  "last" : "D'Arabie",
  "id" : 100,
};

for( const [key, value] of Object.entries(obj3)){
  console.log(value)
}


const arr1 = ["Laurence", "D'arabie", 100];
