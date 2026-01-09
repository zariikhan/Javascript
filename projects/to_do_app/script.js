const input = document.querySelector("#textInput");
const button = document.querySelector("#addbtn");
const list = document.querySelector("#tasklist");
let taskText;
button.addEventListener("click", function () {
  taskText = input.value;
  if (taskText === "") {
    alert("plz enter a task");
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("buttom");
  deleteBtn.textContent = "❌";
  deleteBtn.style.padding = "3px";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.marginLeft = "65px";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
  li.append(deleteBtn);
  list.append(li);
  input.value = "";
});
