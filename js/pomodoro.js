const ButtonClick = document.querySelector('#button-startstop');
const ButtonReset = document.querySelector('.button-reset');
const PomodoroText = document.querySelector('.pomodoro-text');
const PomodoroCnt = document.querySelector('.pomodoro-cnt');
const progressbar = document.querySelector(".progress");

// pomodoro app
// 1. start/stop button
// 버튼 클릭 시 pomodoro text 시작하고 stop 버튼으로 변경,
// 타이머 시작
// 다시 클릭 시 pomodoro text 멈추고 start 버튼으로 변경,
// 타이머 멈춤
// 2. reset button
// 버튼 클릭 시 pomodoro text 초기화
// 3. pomodoro text
// 타이머 시각화를 담당,
// 25분이 지나면 휴식 시간으로 변경
// 휴식시간은 5분
// 휴식시간 종료시 다시 25분으로 변경
// 4. pomodoro counter
// 타이머가 한 바퀴 돌 때마다 카운터 1 증가
// 5. progress bar
//25분 기준 1분당 4% 15초에 1% 증가
//5분 기준 1분당 20% 3초에 1% 증가
//작업시간은 녹색
//휴식시간은 빨간색

let isRunning = false;
let isWorking = true;
let timer;
let time = 1500;
let cnt = 0;
let progress = 0;

function changeProgress(progress){
  progressbar.style.width = `${progress}%`;
};

function setTimerText(time){
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  PomodoroText.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function workTimer(){
  time--;
  if(time % 15 === 0){
    progress++;
    changeProgress(progress);
  }
  setTimerText(time);
  if (time < 0) {
    clearInterval(timer);
    time = 300;
    isWorking = false;
    PomodoroText.textContent = "Break Time";
    PomodoroText.style.color = "red";
    timer = setInterval(breakTimer, 1000);
  }
}

function breakTimer(){
  time--;
  if(time % 3 === 0){
    progress++;
    changeProgress(progress);
  }
  setTimerText(time);
  if (time < 0) {
    clearInterval(timer);
    time = 1500;
    isWorking = true;
    PomodoroText.textContent = "25:00";
    PomodoroText.style.color = "green";
    cnt++;
    PomodoroCnt.textContent = cnt;
    timer = setInterval(workTimer, 1000);
  }
}

function startStop(){
  isRunning = !isRunning;
  if(isRunning){
    ButtonClick.textContent = "Stop";
    timer = setInterval(workTimer, 1000);
  }else{
    ButtonClick.textContent = "Start";
    clearInterval(timer);
  }
}

function reset(){
  clearInterval(timer);
  isRunning = false;
  isWorking = true;
  time = 1500;
  cnt = 0;
  progress = 0;
  changeProgress(progress);
  PomodoroText.textContent = "25:00";
  PomodoroText.style.color = "green";
  PomodoroCnt.textContent = cnt;
  ButtonClick.textContent = "Start";
}

ButtonClick.addEventListener('click', startStop);
ButtonReset.addEventListener('click', reset);















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
