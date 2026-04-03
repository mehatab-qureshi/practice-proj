let form = document.getElementById("form");
let input = document.getElementById("addtask");
let list = document.querySelector(".list");

let todos = [];

//receive data from local storage
const savedTodos = JSON.parse(localStorage.getItem("todos"));

//if isliye ki Agar localStorage null nhi h toh if chalao warna math this is coz to avaoid error if localstorage is null
if (savedTodos) {
  todos = savedTodos; //Page reload ke baad:let todos = [];  // empty hota isliye local.s se saved todos layenge aur [] me upload krnge 

  savedTodos.forEach((task) => {
    let li = document.createElement("li");
    li.textContent = task;

    let del = document.createElement("button");
    del.innerText = "DEL";

    del.addEventListener("click", () => {
      li.remove();

       todos = todos.filter((t) => t !== task);  //filter() → jo TRUE hoga wo rakhega //t !== task  Jo task ke equal NAHI hai, unhe rakho"
      localStorage.setItem("todos", JSON.stringify(todos));
    });

    li.appendChild(del);
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputvalue = input.value;

  //validation (Empty check)
  if (input.value === "") {
    console.log("Enter the fields");
    alert("Enter the task");
    return;
  }

  //local storage (arr[] me push todos)
  todos.push(inputvalue);
  localStorage.setItem("todos", JSON.stringify(todos));

  //create li ele n addding data in li
  let li = document.createElement("li");
  li.textContent = inputvalue;

  //del btn create
  let del = document.createElement("button");
  del.innerText = "DEL";

  //event on del
  del.addEventListener("click", () => {
    li.remove();

    todos = todos.filter((t) => t !== inputvalue);
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  li.appendChild(del);
  list.appendChild(li);

  input.value = "";
});
