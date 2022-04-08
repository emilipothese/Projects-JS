const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function() {
    // Close element if open and another element clicked
    questions.forEach(function(item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    
    question.classList.toggle("show-text");
  });
});

// Other option

// const btns = document.querySelectorAll(".question-btn");
//
// btns.forEach(function(btn) {
//   btn.addEventListener("click", function(e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
