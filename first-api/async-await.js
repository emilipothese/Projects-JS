const val = output();
console.log(val);

output().then((rep) => {
  console.log(rep);
})

output()
.then(rep => viewsData(rep))
.catch(e => console.log(e));

// async function output() {
//   try {
//     let rep = await Promise.resolve
//     ("Hello World");
//     if(!rep.ok) {
//       throw new Error("Error");
//     }
//   }
// }


async function output() {
  const url = "json6.json";
  const req = new Request(url);
  const rep = await fectch(req);
  const json = await rep.json();
  viewData(json);
}

async function viewData(val) {
  console.log(val);
}
