const url = "https://script.google.com/macros/s/AKfycbwTdEiJbw71Nj0a3O25CGpGX0V3Pnlj8wp0rEWtdQYBCDM2yiOJDnl_5ofTxKcNCV2aHw/exec";
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
btn.textContent = "Get Sheet data";

btn.onclick = (e)=>{
   fetch(url)
   .then(rep => rep.json())
   .then(data =>{
       console.log(data);
       const headings = data[0];
       const rows = data.slice(1);
       output.innerHTML = JSON.stringify(data);
       outputData(headings,rows);
     }) 
}

function outputData(headings,rows) {
   const tabl = maker('table',output,'table');
   const heading = maker('tr',tabl,'row');
   headings.forEach(ele =>{
       const el = maker('th',heading,'th');
       el.textContent = ele;
   })
   rows.forEach(row =>{
       const r = maker('tr',tabl,'row');
       row.forEach(col =>{
           const el = maker('td',r,'td');
           el.textContent = col;
       })
  })
}

function maker(t,parent,c){
  const el = document.createElement(t); el.classList.add(c);
  return parent.appendChild(el);
}
