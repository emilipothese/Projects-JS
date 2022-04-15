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
function getData(){
  const url = 'json6.json';
  fetch(url)
  .then((rep) => rep.text())
  .then((data) => {
    console.log(data);
    const jsObj = JSON.parse(data)
  })
}

// console.clear();
// console.log(json);

function output(){
  json.friends.forEach((person) => {
    const temp = `${person.first} ${person.last} ${person.id}`;
    console.log(temp);

  })
}
// output();
