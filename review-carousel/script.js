const reviews = [
  {
    id: 1,
    name: "Ruby Cox",
    job: "web designer",
    img: "https://source.unsplash.com/random/100x100/?happyperson",
    text: "Outstanding service and fast communication. Thank you very much."
  },
  {
    id: 2,
    name: "Travis King",
    job: "Web developper",
    img: "https://source.unsplash.com/random/100x100/?woman",
    text: "Great result. Thanks."
  },
  {
    id: 3,
    name: "Rebecca Rice",
    job: "Web project manager",
    img: "https://source.unsplash.com/random/100x100/?man",
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
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
