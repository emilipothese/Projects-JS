const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const close = document.querySelector(".close");

btn.addEventListener('click', function(){
  modal.classList.add('open-modal');
})

close.addEventListener('click', function(){
  modal.classList.remove('open-modal');
})
