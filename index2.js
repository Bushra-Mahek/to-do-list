let arr = JSON.parse(localStorage.getItem('tasks'))||[];
function printTask(){
  const task = document.getElementsByClassName('box')[0];
  const todo = task.value.trim();
  const datee = document.getElementsByClassName('datee')[0];
  const d = datee.value;
  var i;
    if(todo != '' && d != ''){
    arr.push({todo,d});
    console.log(arr);
    localStorage.setItem('tasks',JSON.stringify(arr));
    }
    task.value='';
    datee.value = '';
    displayTasks();
}
function displayTasks(){
    let html = "";
     for(i = 0;i < arr.length;i++){
      const todoobj = arr[i];
      const {todo,d} = todoobj;
      html+=`<div class='entire'>
      <div>${i+1})  ${todo}</div>              
      <div>${d}</div>          
      <button class="del-btn" onclick="deleteTask(${i});">Delete</button>
      </div>`;
  }


document.querySelector('.display').innerHTML = html||'<p>no tasks added yet</p>';
}

function deleteTask(index){
  arr.splice(index,1);
  localStorage.setItem('tasks',JSON.stringify(arr));
  displayTasks();
}


function enterkey(event){
  if(event.key === 'Enter'){
    printTask();
  }
}
window.onload = displayTasks;
