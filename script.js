//Viết code chèn phần tử vào DOM
const todoList = document.querySelector('ul');
const newTodo = document.createElement('li');
newTodo.textContent = 'Do homework';
todoList.appendChild(newTodo);
//Chèn một phần tử ở trước một phần tử đã tồn tại
const anotherTodo = document.createElement('li');
anotherTodo.textContent = 'Pay bills';
todoList.insertBefore(anotherTodo, todoList.firstElementChild);
//Thay thế một phần tử
const modifiedTodo = document.createElement('li');
modifiedTodo.textContent = 'Feed the dog';
todoList.replaceChild(modifiedTodo, todoList.children[2]);
//xoa 1 phan tu
todoList.children[1].remove();
