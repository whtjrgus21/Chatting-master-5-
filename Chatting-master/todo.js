const toDoForm = document.querySelector(".js-toDoList"),
    toDoInput = toDoform.querySelector("input"),
    toDOList = document.querySelector(".js-toDoList");

    const TODOS_LS = 'toDos';

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "삭제";
    const sqan = document.createElement("span");
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);
    toDOList.appendChild(li);
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    } else {

    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();