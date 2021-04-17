const btn_1 = document.getElementById("btn_1")
const btn_2 = document.getElementById("btn_2")
const btn_3 = document.getElementById("btn_3")

btn_1.addEventListener("click", function(){
    const ingreList = document.querySelector(".ingreList")
    ingreList.classList.toggle("unshow")
})

btn_2.addEventListener("click", function(){
    const prepList = document.querySelector(".prepList")
    prepList.classList.toggle("unshow")
})

btn_3.addEventListener("click", function(){
    const info = document.querySelector(".info")
    info.classList.toggle("unshow")
})