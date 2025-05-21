const arr = [];
function printTask(){
  const task = document.getElementsByClassName('box');
  const todo = task[0].value;
  const datee = document.getElementsByClassName('datee');
  const d = datee[0].value;
  var i;
    if(todo != ''){
    arr.push({todo,d});
    console.log(arr);
    }
    task[0].value='';
    let html = "";
     for(i = 0;i < arr.length;i++){
      const todoobj = arr[i];
      const {todo,d} = todoobj;
      html+=`<div class='entire'>
      <div>${i+1})  ${todo}</div>              
      <div>${d}</div>          
      <button class="del-btn" onclick="arr.splice(${i},1);printTask();">Delete</button>
      </div>`;
  }


document.querySelector('.display').innerHTML = html;
}


function enterkey(event){
  if(event.key === 'Enter'){
    printTask();
  }
}