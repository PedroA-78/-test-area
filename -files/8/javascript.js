const cards = document.querySelectorAll(".card")
let click = 0

document.getElementById("next").addEventListener("click", function(){
    click++
    const nc = verifyC()
    document.getElementById(click).classList.add("none")
    document.getElementById(nc).classList.add("current")

    // if (document.getElementById(click).classList.contains())
})

function verifyC(){
    if (click > 3){
        click = 1
    }

    const nc = click + 1

    if (nc > 3){
        return 1
    } else {
        return nc
    }
}

function print(text){
    console.log(text)
}