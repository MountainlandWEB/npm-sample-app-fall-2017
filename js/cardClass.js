class Card{
    constructor(title, tasks=, id){
        (typeof title !== 'undefined') ? this.title = title : this.title = "";
        (typeof tasks !== 'undefined') ? this.tasks = tasks : this.tasks = [{text: "", checked: false, checkId: "", textId: ""}];
        (typeof id !== 'undefined') ? this.id = id : this.id = "";
    }

    clear(){
        this.title = "";
        this.tasks = [{text: "", checked: false, checkId: "", textId: ""}];
        this.id = "";
    }

    addTask(task){
        this.tasks.push(task);
    }

    deleteTask(task){

    }
}