import { results, mbtis } from "./data.js";

// 1. title
console.log(results[0].title)
// 2. 혼자서 맨탈... 출력
console.log(results[0].results[0])
// 3. 창업가 출력
console.log(results[0].jobs[1])
// 4. mbtis에서 intp 의 값을 출력하기
console.log(mbtis.intp)
// const mbti = 'intp'


// http://127.0.0.1:5500/result.html?mbti=infp
// 쿼리스트링을 가져와야 함.
const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbtis[mbti])
// 받아온 ?mbti=infp에 따른 results 결과를 받아서 변수로
const resultMbti = results[mbtis[mbti]]
console.log(resultMbti)

// 1. 각각의 태그을 지정해야 함.
const titleEl = document.querySelector('.page-title')
const characterEl =document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobsEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')
// 위의 내용에 innerHTML 로 표시
// 단, querySelectorAll 로 가져온 아이들은
// forEach 구문을 이용해서 처리(문법은 찾아서)
// lecture 는 lecture.html페이지를 보이게 하면 됩니다.

titleEl.innerHTML = resultMbti.title
characterEl.src = resultMbti.character

boxEls.forEach(function(box, i){
  box.innerHTML = resultMbti.results[i]
})

jobsEls.forEach((job, i)=>{
  job.innerHTML = resultMbti.jobs[i]
})

lectureEl.href = resultMbti.lectureUrl
lectureImgEl.src = resultMbti.lectureImg
