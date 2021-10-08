const listContent = document.querySelector(".content");
const itemName = document.querySelector("#item-name");
const addButton = document.querySelector(".add-btn");

function printTodoItem(todoValue) {
  // List Item
  const liItem = document.createElement("li"); // <li></li>
  liItem.className = "item"; // <li class="item"></li>

  // P tag
  const pItem = document.createElement("p"); // <p></p>
  const pText = document.createTextNode(todoValue); // Cat Food
  pItem.appendChild(pText); //<p>Cat Food</p>

  const deleteBtn = document.createElement("button"); // <button></button>
  deleteBtn.className = "delete-btn"; // <button class="delete-btn"></button>
  const btnText = document.createTextNode("Delete"); // Delete
  deleteBtn.appendChild(btnText); //button class="delete-btn">Delete</button>

  liItem.appendChild(pItem);
  liItem.appendChild(deleteBtn);

  listContent.appendChild(liItem);

  deleteBtn.addEventListener("click", deleteBtnFn);
}

// var std1 = ["arsalan", 20, 3.999 ]

// var obj1 = {
//   name: "Arsalan",
//   age: 21,
//   cgpa: 3.99,
// }

// obj1.print = function () {
//   console.log(obj1.name);
//  }

// Arrays
var items = [];
// debugger;
const localStorageItems = localStorage.getItem("items");
if (localStorageItems != null) {
  // !=  is ! = (without spacing)
  // Local Storage has some content
  items = JSON.parse(localStorageItems);

  for (var i = 0; i < items.length; i++) {
    const currentTodoItem = items[i];
    console.log(currentTodoItem.name);
    printTodoItem(currentTodoItem.name);
  }
}

/*
<li class="item">
          <p>Dog Food</p>
          <button class="delete-btn">Delete</button>
        </li>
        */
function deleteBtnFn(e) {
  e.target.parentElement.remove();
}

function addButtonFn() {
  const itemNameValue = itemName.value;
  const newItem = {
    id: new Date().getTime(),
    name: itemNameValue,
  };
  items.push(newItem);

  const JSONItems = JSON.stringify(items);
  localStorage.setItem("items", JSONItems);

  itemName.value = "";
  printTodoItem(itemNameValue);
}

addButton.addEventListener("click", addButtonFn);

// addButtonFn("Arsalan", 21);
// addButtonFn("Ahmed", 22);
// addButtonFn("Hannan", 23);
