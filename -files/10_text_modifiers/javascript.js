document.querySelector(".controls button").addEventListener("click", function(){
    const content = document.querySelector(".content")
    let text = window.getSelection()

    const start = text.focusOffset > text.anchorOffset ? text.anchorOffset : text.focusOffset
    const end = text.toString().length
    // const end = text.anchorOffset > text.focusOffset ? text.anchorOffset : text.focusOffset

    print("length: " + text.toString().length + " / start: " + start + " / end: " + end)
    print(content.innerHTML.substr(start, end))
    print(text.toString())
    

    content.innerHTML = content.innerHTML.replace(content.innerHTML.substr(start, end), `<b>${text.toString()}</b>`)
    
})

function print(text){
    console.log(text)
}