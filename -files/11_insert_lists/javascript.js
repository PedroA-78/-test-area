eventParagraph()

document.querySelector(".controls button").addEventListener("click", function(){
    const content = document.querySelector(".content")

    const list = document.createElement("ul")
    const element = document.createElement("li")
    list.appendChild(element)

    const p = document.createElement("p")
    p.style.minHeight = "28px"
    p.textContent = "Clique aqui para sair da lista."
    
    content.appendChild(list)
    content.appendChild(p)

    eventParagraph()
})

function eventParagraph(){
    const paragraphs = document.querySelectorAll(".content p")

    for (let paragraph of paragraphs){
        paragraph.addEventListener("click", function(){
            if (paragraph.textContent == "Clique aqui para sair da lista."){
                paragraph.textContent = ""
            }
        })
    }
}


function print(text){
    console.log(text)
}