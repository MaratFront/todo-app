// Створи простий додаток "Список завдань". Користувач має змогу:Додати нове завдання.Позначити завдання виконаним.Видалити завдання.

// :
// Поле вводу тексту для нового завдання.
// Кнопка для додавання завдання.
// Порожній список завдань (<ul>).
// :
// Реалізуй додавання нового завдання у список.
// Кожне завдання повинно мати:
// Текст завдання.
// Кнопку "Виконано", яка змінює стиль тексту за допомогою додавання відповідного класу (наприклад, перекреслює його - text-decoration: line-through;).
// Кнопку "Видалити", яка видаляє завдання зі списку.
// Додавання завдання:
// При натисканні кнопки "Додати завдання" текст з поля вводу додається до списку у вигляді нового <li>.
// Якщо поле порожнє, нічого не відбувається.
// Позначення виконаним:
// Додай кнопку "Виконано" до кожного завдання.
// При натисканні на цю кнопку текст завдання отримує клас done.
// Видалення завдання:
// Додай кнопку "Видалити" до кожного завдання.
// При натисканні на цю кнопку завдання видаляється зі списку.
const todo = document.querySelector(".todo-list");
const input = document.querySelector(".add-task__input");
const addTask = document.querySelector(".add-task__btn");
console.log("dsfsd");
addTask.addEventListener("click", () => {
  const task = document.createElement("li");
  task.innerHTML = input.value;
  todo.append(task);
  input.value = "";
  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = "Виконано";
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.innerHTML = "Удалить";
  task.append(doneBtn);
  task.append(delBtn);
  doneBtn.addEventListener("click", () => {
    task.classList.add("done");
  });
  delBtn.addEventListener("click", () => {
    task.remove(task);
  });
});
