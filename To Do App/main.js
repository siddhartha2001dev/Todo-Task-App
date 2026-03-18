const InputValue = document.querySelector('input');
const Btn = document.querySelector('#btn');
const OutputValue = document.querySelector('.output');

const todo = []



function check(InputVal, todo) {
    if (InputVal === '')
        return false;

    for (let i = 0; i < todo.length; i++) {
        if (InputVal === todo[i].title) {
            alert("Character already exist");
            return false;
        }
    }
    return true;
}


function render(todo){
    OutputValue.innerHTML = '';
    for (let i = 0; i < todo.length; i++) {

            OutputValue.innerHTML += `<div class=" task ${todo[i].completed ? 'donebtn' : ''}">${todo[i].title}
<button class="delBtn" onclick="del(${i})">
<i class="fa-solid fa-trash"></i>
</button> <button class = "BtnDone" onclick='doneTodo(${i})'>Done</button>
</div>`

        }
}


function doneTodo(i){
    todo[i].completed = !todo[i].completed;
    render(todo);
}


function add() {
    const InputVal = InputValue.value.trim();

    if (check(InputVal, todo)) {
        todo.push({
            title: InputVal,
            completed:false
        });
        OutputValue.innerHTML = '';
        render(todo);
    }
    InputValue.value = '';
}

function del(IndexNo) {
    todo.splice(IndexNo, 1);
    OutputValue.innerHTML = '';
    render(todo);
}


Btn.addEventListener("click", add);

InputValue.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter') add()
})