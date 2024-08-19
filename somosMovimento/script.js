
let btn1 = document.querySelector('#botaoQrCodeRevista');
let showClicks = document.querySelector('#showdata');
let counter = 0;

function printClick() {
  counter++;
  console.log("You clicked the button!!!")
  showClicks.innerHTML = "Number of clicks: " + counter; 
}

btn1.addEventListener('click', printClick);


