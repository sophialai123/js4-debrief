/*
 1- Create an event listener in the button (add new item) that allows the user to add new items to the list and highlight each item when clicking on them.
 2- The heading <h2> should change the text accordingly to the highlighted list item. 
 */

// Selectors

const addNewItems = document.getElementById('button');
const myList = document.getElementById('list');

// Iterate the ul items

// Event Listener - Click the item change the heading

// Event Listener - Click the button add a new item
addNewItems.addEventListener("click", (event) => {

  //create new list items
  let newListItems = document.createElement('li');

  let newInput = document.createElement('input');

  //add text to the list
  newListItems.textContent = "new ";

  //append the listText to the myList
  myList.appendChild(newListItems)






  // let newInputValue = event.target.value;
  // let createText = document.createTextNode(newInputValue)
  // newList.append(createText);
  // document.getElementById('list').appendChild(newList);

})

