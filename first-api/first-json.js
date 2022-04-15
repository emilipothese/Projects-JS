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
// Lancer getData(); dans la console pour exécuter
function getData(){
  const url = 'json6.json';
  fetch(url)
  .then((rep) => rep.text())
  .then((data) => {
    console.log(data);
    const jsObj = JSON.parse(data);
    console.log(jsObj);
    output(jsObj);
  })
}

// Même qu'avant mais avec .json (parse directement)
function getData2(){
  const url = 'json6.json';
  fetch(url)
  .then((rep) => rep.json())
  .then((data) => {
    console.log(data);
    output(data);
  })
}

// console.clear();
// console.log(json);

function output(data){
  data.friends.forEach((person) => {
    const temp = `${person.first} ${person.last} ${person.id}`;
    console.log(temp);

  })
}
