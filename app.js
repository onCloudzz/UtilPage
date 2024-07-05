const ButtonClick = document.querySelector('.button-click');
const ButtonReset = document.querySelector('.button-reset');
const Counter = document.querySelector('.cnt');

const COUNTER_TEXT = 'counter';

function setState(){
  if(localStorage.getItem(COUNTER_TEXT) === null){
    localStorage.setItem(COUNTER_TEXT, 0);
    Counter.textContent = 0;
  }else{
    Counter.textContent = localStorage.getItem(COUNTER_TEXT);
  }
}

function setCounter(count){
  localStorage.setItem(COUNTER_TEXT, count);
}

function getCounter(){
  return parseInt(localStorage.getItem(COUNTER_TEXT));
}

function addCounter(){
  let count = getCounter() + 1;
  if(count > 10){
    count = 0;
  }
  setCounter(count);
  Counter.textContent = getCounter();
  changeProgress(count * 10);
}

function handleClick() {
  console.log('Button clicked');
  addCounter();
}

function hendelReset(){
  console.log('Button reseted');
  localStorage.setItem(COUNTER_TEXT, 0);
  setCounter(0);
  Counter.textContent = 0;
  changeProgress(0);
}

setState();
ButtonClick.addEventListener('mousedown', handleClick);
ButtonReset.addEventListener('click', hendelReset);

const progressbar = document.querySelector(".progress");

const changeProgress = (progress) => {
  progressbar.style.width = `${progress}%`;
};

function pageLoad(){
  console.log('Page loaded');
  changeProgress(getCounter() * 10);
}

window.addEventListener("DOMCountentLoaded", );


/* function handleMouseDown(){
  console.log('Mouse down');
  ButtonClick.style.backgroundColor = 'red';
}

function handleMouseUp(){
  console.log('Mouse up');
  ButtonClick.style.backgroundColor = 'blue';
}

function handleMouseLeave(){
  console.log('Mouse left');
  ButtonClick.style.backgroundColor = 'green';
}

function handleMouseEnter(){
  console.log('Mouse entered');
  ButtonClick.style.backgroundColor = 'white';
}

function MouseEvent(event){
  if(event.type === 'mouseenter'){
    handleMouseEnter();
  }else if(event.type === 'mouseleave'){
    handleMouseLeave();
  }else if(event.type === 'mousedown'){
    handleMouseDown();
  }else if(event.type === 'mouseup'){
    handleMouseUp();
  }
} */



/* ButtonClick.addEventListener('mouseenter',MouseEvent);
ButtonClick.addEventListener('mouseleave',MouseEvent);
ButtonClick.addEventListener('mousedown',MouseEvent);
ButtonClick.addEventListener('mouseup',MouseEvent); */
