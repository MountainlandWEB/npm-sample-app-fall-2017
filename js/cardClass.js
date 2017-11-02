
export default class Card{
    constructor(title, tasks, id, inputId, addCard, deletCard){
        (typeof title !== 'undefined') ? this.title = title : this.title = "";
        (typeof tasks !== 'undefined') ? this.tasks = tasks : this.tasks = [{text: "", checked: false, checkId: ""}];
        (typeof id !== 'undefined') ? this.id = id : this.id = "";
        (typeof id !== 'undefined') ? this.inputId = inputId : this.inputId = "";
        (typeof addCard !== 'undefined') ? this.addCard = addCard : this.addCard = () => {};
        (typeof deletCard !== 'undefined') ? this.deletCard = deletCard : this.deletCard = () => {};

    }

    clear(){
        this.title = "";
        this.tasks = [{text: "", checked: false}];
        this.id = "";
    }

    addTask(task){
        this.tasks.push(task);
    }

    deleteTask(taskNum){
        this.tasks.splice(taskNum, 1);
    }


    createNode(){
        let cardContainer = document.createElement('div');
        cardContainer.className = "card bg-light mb-3";
        cardContainer.id = this.id;

        let cardHeader = document.createElement('div');
        cardHeader.className = "card-header";

        let cardHeaderInput = document.createElement('input');
        cardHeaderInput.type = 'text';
        cardHeaderInput.className = 'card-title-input';
        cardHeaderInput.placeholder = 'Title';



        let cardHeaderBtn = document.createElement('button');
        cardHeaderBtn.className = 'btn btn-info';
        cardHeaderBtn.onclick = this.addCard;
        let cardHeaderBtnText = document.createElement('span');
        cardHeaderBtnText.innerHTML = "+";
        cardHeaderBtn.appendChild(cardHeaderBtnText);

        cardHeader.appendChild(cardHeaderInput);
        cardHeader.appendChild(cardHeaderBtn);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        for(let i = 0; i < this.tasks.length; i++) {
            let cardBodyInputGroup = document.createElement('div');
            cardBodyInputGroup.className = 'input-group';
            cardBodyInputGroup.id = this.inputId;

            let cardBodySpan = document.createElement('span');
            cardBodySpan.className = 'input-group-addon';
            let cardBodySpanInput = document.createElement('input');
            cardBodySpanInput.type = 'checkbox';
            cardBodySpanInput.className = 'checkbox-class';
            cardBodySpanInput.checked = (this.tasks[i].checked) ? true : false;
            cardBodySpan.appendChild(cardBodySpanInput);


            let cardBodyInput = document.createElement('input');
            cardBodyInput.className = 'form-control';
            cardBodyInput.type = 'text';
            cardBodyInput.placeholder = 'new task';
            cardBodyInput.value = this.tasks[i].text;

            let cardBodyBtn = document.createElement('button');
            cardBodyBtn.className = 'btn btn-outline-danger task-item-delete';
            cardBodyBtn.innerHTML = "X";

            cardBodyInputGroup.appendChild(cardBodySpan);
            cardBodyInputGroup.appendChild(cardBodyInput);
            cardBodyInputGroup.appendChild(cardBodyBtn);
            cardBody.appendChild(cardBodyInputGroup);
        }

        let btnContainer = document.createElement('div');
        btnContainer.className = 'container-fluid';

        let btnRow = document.createElement('div');
        btnRow.className = 'row button-container';

        let btnDelete = document.createElement('button');
        btnDelete.type = 'button';
        btnDelete.className = 'btn btn-dark col-4 card-delete';
        //btnDelete.onclick = this.deletCard;
        btnDelete.innerHTML = "Delete";

        let btnSave = document.createElement('button');
        btnSave.type = 'button';
        btnSave.className = 'btn btn-light col-5';
        btnSave.onclick = this.deletCard;
        btnSave.innerHTML = "Save";

        btnRow.appendChild(btnDelete);
        btnRow.appendChild(btnSave);
        btnContainer.appendChild(btnRow);

        cardContainer.appendChild(cardHeader);
        cardContainer.appendChild(cardBody);
        cardContainer.appendChild(btnContainer);

        return cardContainer;
    }
}
