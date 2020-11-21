const cardsCllNode = document.querySelectorAll(".card_challenges")
const cardsModal = document.querySelectorAll(".card_modal")
const closeButtons = document.querySelectorAll(".close_button")
const modal = document.querySelector(".modal")

const cards = Array.from(cardsCllNode)
for (let card of cards) {
    card.addEventListener("click", function(){
        cardNum = cards.indexOf(card)
        modal.classList.add("modal_show")
        cardsModal[cardNum].classList.add("card_show")
    })
}

for (let closeButton of closeButtons) {
    closeButton.addEventListener("click", function(){
        modal.classList.remove("modal_show")
        cardsModal[cardNum].classList.remove("card_show")
    })
}
