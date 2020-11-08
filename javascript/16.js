//selectors
var todoInput = document.querySelector(".todoInp");
var todoButton = document.querySelector(".todoBtn");
var todoList = document.querySelector(".todoList");



//Event Handlers
// todoButton.onclick = create;
todoButton.addEventListener('click', create);
todoList.onclick = chkdelete;


//Functions

function create(e) {
    e.preventDefault();
    if (todoInput.value) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");
        var newLi = document.createElement("li");
        newLi.classList.add("todoItem");
        newLi.innerHTML = todoInput.value;
        newDiv.appendChild(newLi);
        var chkBtn = document.createElement("button");
        chkBtn.classList.add("chkBtn");
        chkBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
        newDiv.appendChild(chkBtn);
        var crossBtn = document.createElement("button");
        crossBtn.classList.add("crossBtn");
        crossBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
        newDiv.appendChild(crossBtn);
        todoList.appendChild(newDiv);
        
    }
    else {
        alert("This field can't be left empty");
    }
}
function chkdelete(e) {
    var item = e.target;
    if (item.classList[0] == "crossBtn") {
        var parent = item.parentNode;
        parent.remove();
    }
    if (item.classList[0] == "chkBtn") {
        var parent = item.parentNode;
        parent.classList.toggle("completed");
    }
}