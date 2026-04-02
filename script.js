let form = document.getElementById("form");
let input = document.getElementById("addtask");
let list = document.querySelector(".list");

let todos = [];

//receive data from local storage
const savedTodos = JSON.parse(localStorage.getItem("todos"));

if (savedTodos) {
  todos = savedTodos;

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
}); ///till here

// let addbtnn = document.createElement("button");
// addbtnn.innerText = "Add";
// body.append(addbtnn);

// let body = document.querySelector("body");
// let input = document.querySelector(".text");

// //created n added button
// let addlist = document.createElement("button");
// addlist.innerText = "Add";
// body.appendChild(addlist);

// //creatd n added del btn
// let dellist = document.createElement("button");
// dellist.innerHTML = "Del";
// body.appendChild(dellist);

// let myFunctionAdd = () => {
//   let li = document.createElement("li");
//   li.textContent = input.value;
//   if (input.value === "") {
//     console.log("Enter the fields");
//     return;
//   }
//   body.appendChild(li);
//   input.value = "";

// };

// addlist.addEventListener("click", myFunctionAdd);

// dellist.addEventListener("click", () => {
//   let li = document.querySelector("li:last-child");
//   li.remove();
// });
