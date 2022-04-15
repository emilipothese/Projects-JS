// JSON.parse
const arr1 = [
  {"first": "Laurence"},
  {"first": "Mike"},
  {"first": "John"},
  {"first": "Lisa"}
];

console.log(arr1[0].first);

const str1 = JSON.stringify(arr1); // attribue le format JSON à arr1
const jsObj1 = JSON.parse(str1); // parse le JSON de str1
console.log(jsObj1[0].first);



// JSON fetch
const json = {
  "friends": [
    {
      "first" : "Tom",
      "last" : "The Cat",
      "id" : 100
    },
    {
      "first" : "Jerry",
      "last" : "The Mouse",
      "id" : 99
    },
    {
      "first" : "Titi",
      "last" : "The Canirie",
      "id" : 98
    },
    {
      "first" : "Pluto",
      "last" : "The Dog",
      "id" : 97
    },
  ]
}

console.clear();
console.log(json);
