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
