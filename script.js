// const num1 = Math.random()*10
// console.log(num1)
const num1 = Math.ceil(Math.random()*10)
console.log(num1)
const num2 = Math.ceil(Math.random()*10)
console.log(num2)

const question = document.getElementById("question")
const input = document.getElementById("input")
const form = document.getElementById("form")
const scoreEl = document.getElementById("score")
let score = JSON.parse(localStorage.getItem("score"))// fl application => local Storage ++ +++ ++++

question.innerText = `what is ${num1} multiply by ${num2}`

if(!score){
    score = 0
}

scoreEl.innerText = `score: ${score}`

const correctAns = num1*num2
form.addEventListener("submit", () => {
    const userAns =Number(input.value)
    console.log(userAns, typeof userAns)
     if(userAns === correctAns){
            score++
            updateLocalStorage()
        }else{
            score--
            updateLocalStorage()
        }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
