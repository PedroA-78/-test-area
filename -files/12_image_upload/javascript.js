const input = document.querySelector("input[type='file']")
const file = new FileReader()
const image = document.querySelector(".preview")

input.addEventListener('change', function(){
    file.readAsDataURL(input.files[0])

    file.addEventListener('loadend', function(load){
        image.src = load.target.result
        image.style.display = "block"
    })
})

function print(text){
    console.log(text)
}