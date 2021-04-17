document.querySelector(".controls button").addEventListener("click", function(){
    let event = 0
    const content = document.querySelector(".content")
    let selection = window.getSelection()
    let text = content.innerHTML

    let start = selection.focusOffset > selection.anchorOffset ? selection.anchorOffset : selection.focusOffset
    let end = selection.anchorOffset > selection.focusOffset ? selection.anchorOffset : selection.focusOffset

    if (selection.toString().length == 0){
        return
    }
    
    const bool = start > text.indexOf("</")

    print(start + " / " + end)

    if (text.indexOf("</") != -1 && !bool){
        event = text.toString().split("</").length - 1
        print(event)

        start += selection.toString().length + (7 * event)
        end += selection.toString().length + (7 * event)
    }

    // if (text.indexOf("<b>") != -1 && !bool){
    //     start += selection.toString().length + 7
    //     end += selection.toString().length + 7
    // }

    print(start + " / " + end)

    text = text.split('')

    for (let i = start; i < end; i++){
        if (selection.toString().length == 1){
            text[i] = `<b>${text[i]}</b>`
        } else if (i == start){
            text[i] = `<b>${text[i]}`
        } else if (i == end - 1){
            text[i] = `${text[i]}</b>`
        }
    }

    text = text.join("")
    print(text)

    content.innerHTML = text

    // content.textContent = text

    // print("length: " + text.toString().length + " / start: " + start + " / end: " + end)
    // print(content.innerHTML.substr(start, end)) 

    // content.textContent = content.innerHTML.replace(content.innerHTML.substr(start, end), `<b>${text.toString()}</b>`)

    // text = text.empty()
    
})

function print(text){
    console.log(text)
}