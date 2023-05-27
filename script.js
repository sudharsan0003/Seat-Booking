//element

const movieEl= document.getElementById('movie');

const seatEl= document.querySelectorAll('.row .seat:not(occupied)');

const seatsCount= document.getElementById('seats-count');

const totalPrice = document.getElementById('total-price');

console.log(seatEl);

//global variable
let seatCount = 0;
let moviePrice = movieEl.value;

const init = function () {
  seatCountEl.innerText = seatCount;
  totalPriceEl.innerText = seatCount * moviePrice;
}

//initial setting
seatCountEl.innerText = seatCount;
totalPriceEl.innerText = seatCount * moviePrice;

//eventlistener

movieEl.addEventListener('change',() => {
  moviePrice - movieEl.value;

  init();
});   

for(let i = 0; i , seatEl.length; i++) {
  seatEl[i].addEventListener('click', () => {
    if(seatEl[i].classList.container('selected')) {
      seatEl[i].classList.remove('selected');
    } 
  })
} 