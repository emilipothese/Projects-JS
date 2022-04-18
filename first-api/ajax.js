const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const output = document.querySelector('.output');
let counter = 0;
const url = 'json.json';

console.log(btn);

output.innerHTML = '<h1>Hello World</h1>';

document.addEventListener('DOMContentLoaded', (e) => {
   getValues();
 })

 function getValues() {
   fetch(url)
   .then(rep => rep.json())
   .then(data => {
    console.log(data);
    counter = data.counter;
    updater();
 }) }

 //output.textContent = '<h1>Hello World</h1>';

 btn.onclick = (e) => { console.log(e.target);}
 btn.onclick = adder;
 btn1.onclick = resetCounter;

 function updater() {
   output.innerHTML = `<h2>Counter : ${counter}</h2>`;
 }

 function adder(e) {
    console.log(e.target);
    counter++;
    updater();
  }

  function resetCounter(e) {
    getValues();
  }
