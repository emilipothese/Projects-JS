const output = document.querySelector(".output");
const results = document.createElement("div");
const btn = document.createElement("button");
btn.textContent = "Click me";
output.append(btn);
output.append(results);
results.textContent = "Message";

btn.addEventListener("click", (e) => {
  const url = "data.json";
  fetch(url)
  .then(rep => rep.json())
  .then((data) => {
    results.innerHTML = "Results:<br/>";
    console.log(data);
    addtoPage(data[1].country);
    addtoPage(data[0].people[1].cities);
    addtoPage(data[0].people[0].names);
  })
})

function addtoPage(arr) {
  arr.forEach((item) => {
    const div = document.createElement("div");
    results.append(div);
    let temp = item;
    if((typeof item == "object")) {
      const fullName = Object.values(item).join(" ");
      temp = fullName;
    }
    div.textContent = temp;
  })
}
