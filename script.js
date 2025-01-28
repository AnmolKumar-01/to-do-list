const inputBox = document.querySelector('#input-box');
const taskList = document.querySelector('#list-container')
const button = document.querySelector('button')

// this is used to add the task in list
const addTask = function(){
    const task = inputBox.value;
    if(task.trim() == ''){
        alert("Bro! You really don't have any task? (Task cant be empty)");
    }
    else{
        // creatiing new task list item
        const newTask = document.createElement('li');
        newTask.innerHTML = task;
        // adding new task list item to task list
        taskList.appendChild(newTask);

        // add the cross icon at the end of each list
        const cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        newTask.appendChild(cross);

    }
    inputBox.value = '';
    
    // data will be saved after every task addition 
    saveData();
}

// adding task when i press enter in input tag
inputBox.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        addTask();
    }
})

// adding task when i click on search icon
button.addEventListener('click' , addTask) ;


// on clicking task (making list checked) or cross icon(removing list from tasklist)

taskList.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
});

// keeping task list unchanged while reloading

function saveData() {
    // all the data inside taskList will be saved as name = "data" in local storage
    localStorage.setItem("data", taskList.innerHTML);
}

// display saved data everytime we reload
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();
