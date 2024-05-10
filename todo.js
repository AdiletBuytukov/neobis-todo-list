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

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    checkbox.className = 'checkbox'
  }
  inputBox.value = '';
  saveLocalStorage();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.className === "btnDelete") {
    e.target.parentElement.remove();
    saveLocalStorage();
  }

}, false);

listContainer.addEventListener("change", function (e) {
  if (e.target.className === 'checkbox') {
    const listItem = e.target.parentElement;

    if (e.target.checked) {
      listItem.classList.add('checked');
    } else {
      listItem.classList.remove('checked');
    }
    saveLocalStorage();
  }
})

function saveLocalStorage() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();