let js = document.querySelector(".js_off")
js.classList.remove("js_off")
js.classList.add("js_on")


let btn_prox = document.getElementById("btn_prox")
let btn_ant = document.getElementById("btn_ant")

let comments = document.querySelectorAll(".card_comments")

btn_prox.addEventListener("click", function(){
    selectComments("+")
})

btn_ant.addEventListener("click", function(){
    selectComments("-")
})

function selectComments(sinal) {
    let currentComment = verifyClassShow(comments)
    let nextComment
    if (sinal == "+") {
        nextComment = currentComment + 1
        if (nextComment > 5) {
            nextComment = 0
            changeComment(currentComment, nextComment)
        } else {
            changeComment(currentComment, nextComment)
        }
    } else if (sinal == "-") {
        nextComment = currentComment - 1
        if (nextComment < 0) {
            nextComment = 5
            changeComment(currentComment, nextComment)
        } else {
            changeComment(currentComment, nextComment)
        }
    }
}

function verifyClassShow(comments){
    let numCard
    for (let i = 0; i <= comments.length - 1; i++) {
        if (comments[i].classList.contains("show")) {
            numCard = i 
        }
    }
    return numCard = numCard == undefined ? numCard = 0 : numCard
}

function changeComment(crrCmm, nxtComm) {
    comments[crrCmm].classList.remove("show")
    comments[nxtComm].classList.add("show")
}