import Card from './cardClass.js';
let row = document.getElementById('card-row');
let globalCardId = -1;
let globalInputIdNum = -1;
let globalInputId = "input-id-";
$('#add-new-btn').bind('click', addCard);
$('#clear-completed-btn').bind('click', deletCompleted);
$('#delete-all-btn').bind('click', deletAll);



let cards = [];



addCard();

function updateCard(){

}


function newRow(e) {
    //e.target.parentElement.parentElement.parentElement);
    let inputRow = e.target.parentElement;
    let newInputRow = inputRow.cloneNode(true);
    globalInputId = 'input-id-';
    newInputRow.id = globalInputId + (globalInputIdNum++);
    newInputRow.childNodes[1].value = "";
    inputRow.parentElement.appendChild(newInputRow);
    newInputRow.childNodes[1].focus();

    $(".form-control").unbind();


    $(".form-control").bind("keypress", function(e){
        if (e.keyCode === 13){
            newRow(e);
        }
    });

    $(".task-item-delete").bind("click", function(e){
        deletItem(e);
    });

}

function addCard(){
    globalCardId++;
    globalInputId = 'input-id-';
    globalInputIdNum++;
    globalInputId += globalInputIdNum;
    let newCard = new Card('', [{text: '', checked: false}], globalCardId, globalInputId, addCard, deletCard);
    cards.push(newCard);
    let newCardNode = newCard.createNode();
    row.appendChild(newCardNode);

    $(`#${globalCardId} .form-control`).bind("keypress", function(e){
        if (e.keyCode === 13){
            newRow(e);
        }
    });

    $(".card-delete").bind("click", function(e){
        deletCard(e);
    });

    $(".task-item-delete").bind("click", function(e){
       deletItem(e);
    });

}

function deletCard(e){
    let cardId = e.target.parentElement.parentElement.parentElement;
    let deletedCard = document.getElementById(cardId.id);
    deletedCard.outerHTML = "";
    cards.splice(cardId, 1);
}

function deletItem(e){
    let cardId = e.target.parentElement.parentElement.parentElement.id;
    console.log(cardId);
    let item = e.target.parentElement;
    let deletedItem = document.getElementById(item.id);
    deletedItem.outerHTML = "";
}

function deletCompleted(e){
    let all = document.querySelectorAll('.checkbox-class');

    for(let i = 0; i < all.length; i++){
        if (all[i].checked === true){
            all[i].parentElement.parentElement.outerHTML = "";
        }
    }
    console.log(all);
}

function deletAll(e){
    row.innerHTML = "";
    cards = [];
    globalCardId = -1;
    globalInputIdNum = -1;
    addCard();
}