const output = document.querySelector(".output");
const results = document.createElement("div");
const btn = document.createElement("button");
btn.textContent = "Click me";
output.append(btn);
output.append(results);
results.textContent = "Message";
