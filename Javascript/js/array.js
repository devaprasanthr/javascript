todolist= [];
function doTolist() {
  const inputValue = document.querySelector('.js-input-value');
  const name = inputValue.value;
  todolist.push(name);
  console.log(todolist);
  inputValue.value= '';


}