const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const btn2 = document.createElement('button');
const myInput = document.querySelector('input');

btn2.textContent = "load search results";
document.body.prepend(btn2);

const output = document.querySelector('.output');
btn.textContent = 'Get Zen Quote';
btn1.textContent = 'Endpoints';

const url = 'https://api.github.com/zen';
const url1 = 'https://api.github.com/';
const url2 ='https://api.github.com/search/repositories?q=javascript';

btn.onclick = () => {
  fetch(url)
    .then(res => res.text())
    .then(zen => {
      console.log(zen);
      output.innerHTML = `<h1>${zen}</h1>`;
    })
  }

btn1.onclick = () => {
  fetch(url1)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let html = '<ul>';
    for (const [key, value] of Object.entries(data)) {
        console.log(key, value);
        html += `<li><a href="${value}" target="_blank">${key}</a></li>`;
    }
    html += `</ul>`;
    output.innerHTML = html;
  })
}

btn2.onclick = () => {
  const val = myInput.value;
  const main = `${url2}&per_page=${val}`;
  fetch(main)
  .then(res => res.json())
  .then(data => {
    output.innerHTML = `<div>Search for ${val} results total:${data.total_count}</div>`;
    outputItems(data.items);
  })
}

function outputItems(data) {
  let html = '';
  data.forEach(el => {
       html += `<div style="border:1px solid #ddd">`;
       html += `<div>${el.name}</div>`;
       html += `<div>${el.url}</div>`;
       html += `<div>${el.description}</div>`;
       html += `<div>`;
       el.topics.forEach(topic => {
           html += `<span>${topic}</span> | `;
       })
       html += `</div></div>`;
   })
   output.innerHTML += html;
}
