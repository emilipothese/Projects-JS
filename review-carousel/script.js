const reviews = [
  {
    id: 1,
    name: "Ruby Cox",
    job: "web designer",
    img: "https://source.unsplash.com/random/100x100/?person",
    text: "Outstanding service and fast communication. Thank you very much."
  },
  {
    id: 2,
    name: "Travis King",
    job: "Web developper",
    img: "https://source.unsplash.com/random/100x100/?person",
    text: "Great result. Thanks."
  },
  {
    id: 3,
    name: "Rebecca Rice",
    job: "Web project manager",
    img: "https://source.unsplash.com/random/100x100/?person",
    text: "Amazingly outstanding result and quick communication Thanks a bunch!"
  },
  {
    id: 4,
    name: "Natalia Allen",
    job: "UX researcher",
    img: "https://source.unsplash.com/random/100x100/?person",
    text: "Satisfying outcome! Thanks!"
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
