const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value === '') {
    alert("Поле не может быть пустым, введите текст");
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    const btnEdit = document.createElement('button');
    btnEdit.innerHTML = 'Edit'
    li.appendChild(btnEdit);
    btnEdit.name = 'btnEdit';
    btnEdit.className = 'btnEdit';

    const btnDelete = document.createElement('button');
    btnDelete.innerHTML = 'Delete'
    li.appendChild(btnDelete);
    btnDelete.className = 'btnDelete';
  }
  inputBox.value = '';
}

listContainer.addEventListener("click", function (e) {
  if (
    e.target.className === "btnDelete") {
    e.target.parentElement.remove();
  }
}, false);

