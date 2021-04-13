document.querySelector(".controls button").addEventListener("click", function(){
    const content = document.querySelector(".content")
    let text = window.getSelection().toString()
    text = content.textContent.replace(text, `<b>${text}</b>`)

    content.innerHTML = text

    const selection = window.getSelection()

    
})