// Selecionado todos os cards
const cards = document.querySelectorAll(".card")

// Definido a variavel que vai passar por todos os cards
let counter = 0

// Definindo um intervalo automotica para passar o slide
let timer = setInterval(nextSlide, 5000)

// Selecionando o botão de próximo e adicionado a ele um evento do click
document.querySelector(".next").addEventListener("click", function(){
     nextSlide() // Chama o próximo slide
     clearInterval(timer) // Limpa o timer anterior
     timer = setInterval(nextSlide, 5000) // Definindo um novo timer
})

// Função que é responsavel por chamar o próximo slide
function nextSlide(){
    vCounter() // Executa a função que verifica a variavel contadora
    vClass(cards) // Executa a função que controlar as classes nos cards
    cards[counter].classList.add("nslide") // Adiciona a classe 'nslide' no card que vai ser exibido
    cards[counter].style.zIndex = "3" // Coloca o card que vai ser exibido em cima do outros
    counter++ // Adiciona um no contador
}

// Funçãp que vai controlar as classes e qual elemento vai estar por cima do outro
function vClass(element){
    let id = counter - 1 // Difinido a variavel que vai ser responsavel pelo card anterior ao exibido
    let nextId = counter + 1 // Difinindo a variavel que vai ser resposavel pelo proximo card que vai ser exibido
    
    // Verifica se o contador está menor do que (0) para evitar erro na execução, se for menor que zero ela define o contador para o ultimo card
    if (counter < 1) {
        id = 2
    }

    // Verifica se o contador está maior do que (2) para evitar erro na execução, se for marior que 2 ela define o contador para o primeiro card
    if (nextId > 2) {
        nextId = 0
    }

    // Verifica se o card anterior tem a classe 'nslide'
    if (element[id].classList.contains("nslide")){
        element[id].classList.remove("nslide") // Remove a classe 'nslide' do card anterior
        element[id].style.zIndex = "0" // Coloca o card anterior por baixo de todos
        element[nextId].style.zIndex = "2" // Coloca o próximo card por baixo do card atual para dar efeito de fade
    }
    
}

// Função que vai alocar o contador dentro do limite da quantidade cards
function vCounter(){
    if (counter > 2) {
        counter = 0
    } else if (counter < 0) {
        counter = 2
    }
}


// Função para satisfazer o a minha preguiça de digitar console.log  a todo teste
function print(text){
    console.log(text)
}