function onReady() {

  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
    let newNum = 0;

    function createNewToDo(){
        const newToDoText = document.getElementById('newToDoText');
        if(!newToDoText.value){return;}

        toDos.push ({
            title: newToDoText.value,
            complete: false,
            id: newNum
        });
        newNum++;

        newToDoText.value = '';
        renderTheUI();
    }

   function removeToDo(newNum) {
    toDos = toDos.filter((remove) => remove.id !== newNum);
      renderTheUI(toDos);
    }

    function renderTheUI(){
        const toDoList = document.getElementById('toDoList');

            toDoList.textContent = '';

        toDos.forEach(function(toDo){
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            const delButton = document.createElement('button');

            checkbox.type = "checkbox";

            newLi.textContent = toDo.title;
            delButton.textContent = "Delete";

            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(delButton);



            delButton.addEventListener('click', event => {
              removeToDo(toDo.id);
          });

        });

    }


    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();

    });

renderTheUI();

}

window.onload = function() {
    onReady();
};
