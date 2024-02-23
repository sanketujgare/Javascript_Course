const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
  }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }];
  
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = '';
  todoList.forEach((todoObject,index)=>{
    // const todoObject = todoList[i];
      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;
      const { name, dueDate } = todoObject;
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button 
        " class="delete-todo-button js-delete-todo-button">Delete</button> 
      `;
      todoListHTML += html;
  })
    // for (let i = 0; i < todoList.length; i++) {
    //   const todoObject = todoList[i];
    //   //const name = todoObject.name;
    //   //const dueDate = todoObject.dueDate;
    //   const { name, dueDate } = todoObject;
    //   const html = `
    //     <div>${name}</div>
    //     <div>${dueDate}</div>
    //     <button onclick="
    //       todoList.splice(${i}, 1);
    //       renderTodoList();
    //     " class="delete-todo-button">Delete</button> 
    //   `;
    //   todoListHTML += html;
    // }
  
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
  }
  document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
    addTodo();
  })
  document.querySelectorAll('.js-delete-todo-button').forEach((deletebutton,index)=>{
    deletebutton.addEventListener('click',()=>{
      todoList.splice(index, 1);
          renderTodoList();
    })
  });
  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
  
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
  
    todoList.push({
      //name: name,
      //dueDate: dueDate,
      name,
      dueDate
    });
  
    inputElement.value = '';
  
    renderTodoList();
  }