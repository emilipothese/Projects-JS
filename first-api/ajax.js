const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
let counter = 0;

output.innerHtml = "<h1>Hello World</h1>";

btn.onclick = (e) => {
  console.log(e.target);
}

btn.onclick = adder;

function adder(e) {
  console.log(e.target);
  counter++;
  output.innerHtml = `<h2>Counter : ${counter}</h2>`;
}
