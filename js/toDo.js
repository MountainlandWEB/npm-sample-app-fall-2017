if(!localStorage.getItem("Cards")){

}
let cleanCard = document.getElementById('clean-card');
let row = document.querySelector('.row');
let inputGroup = document.getElementById('input-group-id');
let cardBody = document.querySelector('.card-body');

let initialCard = cleanCard.cloneNode(true);
initialCard.id = `${Math.floor(Math.random() * 1000000)}`;
row.appendChild(initialCard);



$("#input-task").bind("keypress", function(e){
    if (e.keyCode == 13){
        newRow();
    }
});




function newRow(){
    let newGroup = inputGroup.cloneNode(true);
    cardBody.appendChild(newGroup);
}

function addCard(){
    let newCard = cleanCard.cloneNode(true);
    newCard.id = `${Math.random() * 1000}`;
    let newCardNodes = newCard.childNodes;
    console.log(newCardNodes);
    row.appendChild(newCard);
}

function delet(e){
    let cardId = e.parentElement;
    cardId = cardId.parentElement;
    cardId = cardId.parentElement;
    let deletedCard = document.getElementById(cardId.id);
    deletedCard.innerHTML = "";
    deletedCard.outerHTML = "";
}