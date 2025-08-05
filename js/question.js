import { questions } from "./data.js";

// console.log("질문페이지");

// // 번호출력
// console.log(questions[0].number)
// console.log(questions[0].question)
// console.log(questions[0].choices[0].text)
// console.log(questions[0].choices[1].text)

const progressBar = document.querySelector(".progress .value");
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");

let currentNumber = 0;

// mbti 결과를 담을 변수 선언
let mbti = '';

// choice1El과 choiceEl2에 클릭 이벤트를 걸어놓는다.
choice1El.addEventListener('click', function(){
  nextQuestion(0);
})
choice2El.addEventListener('click', function(){
  nextQuestion(1);
})


function nextQuestion(choiceNumber){
  if(currentNumber == questions.length - 1){
    // 결과 페이지로 이동
    // 검사 한 mbti 결과를 갖고
    console.log('결과 페이지로 이동할거야~ 구현 중...')
    showResultPage();
    return
  }
  // mbti 결과 저장
  mbti = mbti + questions[currentNumber].choices[choiceNumber].value
  console.log("mbti = " + mbti)
  currentNumber = currentNumber + 1;
  console.log(currentNumber)
  renderQuestion();
}

function showResultPage(){
  // 쿼리 스트링을 만들어서 결과 페이지를 호출
  location.href = './result.html?mbti=' + mbti;
}


function renderQuestion(){
  const question = questions[currentNumber];
  
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressBar.style.width = (currentNumber+1)*10 + '%';
}

renderQuestion();