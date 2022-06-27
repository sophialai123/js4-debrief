// BASIC SYNTAX
// Selectors: 
// let elementName = document.querySelector("#elementId")
// // Functions
// function functionName() {
//   // do something here

// }
// // Call the event with an event listener
// elementName.addEventListener("onclick", functionName);

// 1. DISPLAY NAME
// Click the button to display your name in the box
// (Tip: in this example, you will hard code your name within the JavaScript function, rather than use the input box to grab it).


// Selectors
const clickMeButton = document.querySelector("#btnName");
clickMeButton.addEventListener('click', clickMeFunction)

// Function
function clickMeFunction() {
  document.getElementById("myName").value = "Sophia";
}

// Call the event

// 2. LIGHTSWITCH
// Switch lights on mouseover
// When the mouse cursor is on the lightbulb image, the lighton image should show; and revert back to the lightoff image when the mouse moves off.

// Selectors

const imageOff = document.querySelector("#imageOff")


imageOff.addEventListener('mouseover', () => {
  imageOff.src = './images/lighton.png';
  imageOff.addEventListener('mouseout', () => {
    imageOff.src = "./images/lightoff.png";
  })
})


// Call the event

// 3. Double click button to display content
// Selectors
const doubleClickButton = document.querySelector("#btndbName");
const displayContent = document.getElementById('displayPara');

function doubleClickFuction() {

  //display content:
  displayContent.innerHTML = "You double clicked me";
  displayContent.style.color = "lightblue";
  //create a new img element
  let newImage = document.createElement('img');
  newImage.src = './images/smileyface.png';

  //add a class name for the image
  newImage.classList.add('imgClass');
  displayContent.appendChild(newImage);
}


// Call the event
doubleClickButton.addEventListener('dblclick', doubleClickFuction)

// 4. Traffic Lights
// Selectors
const stopButton = document.getElementById('btnStop');
const readyButton = document.getElementById("btnReady");
const goButton = document.getElementById('btnGo')


// Call the events:
stopButton.addEventListener("click", () => {
  document.getElementById('stopDiv').style.backgroundColor = "red";
})

readyButton.addEventListener("click", () => {
  document.getElementById("readyDiv").style.backgroundColor = "yellow";
  document.getElementById('stopDiv').style.backgroundColor = " black";
})

goButton.addEventListener("click", () => {
  document.getElementById('goDiv').style.backgroundColor = "green";
  document.getElementById("readyDiv").style.backgroundColor = "black";
})



// 5. Change textbox border colours
// Selectors
const changeBorderColor = document.querySelector("#btn2Name");

changeBorderColor.addEventListener("click", () => {
  document.getElementById('firstName').style.borderColor = "red";
  document.getElementById('lastName').style.borderColor = "green";

})



// 6. Validate the input [length should be more than 8 characters]
// Selectors

const submitButton = document.getElementById("btnSub2");
const inputValue = document.getElementById('myName2')

submitButton.addEventListener("click", (event) => {
  if (inputValue.value.length < 8 || inputValue.value === "" || inputValue.value === null) {

    //display error message
    const errMsg = document.getElementById('errMsg');
    errMsg.innerHTML = 'length should be more than 8 characters';
    errMsg.style.color = "red";
  } else {
    submitButton.submit();
  }

})


// 7.create a list of hobbies
// Selectors

const hobbyButton = document.getElementById('btnHobbies');
const promptBox = document.getElementById('hobbies');

hobbyButton.addEventListener("click", () => {
  //create a promt box
  let listItmes = prompt("Enter your hobbies")
  //create a list
  let createHobbyList = document.createElement("li");
  //get the promt value
  let textContent = document.createTextNode(listItmes)
  //append the list items
  createHobbyList.appendChild(textContent)
  //display on the section 
  promptBox.appendChild(createHobbyList)
})



/*Function {
  //for loop
}*/

// Call the event




// 8. Display a profile card from an object
//Object

//create a new img element
let newImg = document.createElement('img');
newImg.src = './images/face.jpg';
newImg.classList.add("newImg")


const displayInfor = {
  name: "Sophia",
  role: "Develpoer",
  hobbies: ['travel', 'moives'],
  img: newImg,
}

// Selectors

const displayButton = document.getElementById('btnProfile');

const displayCard = document.getElementById('displayCard');


displayButton.addEventListener("click", () => {

  for (const key in displayInfor) {

    // let values = [];
    // values.push(displayInfor[key]);
    // console.log(values)
    displayCard.append(displayInfor[key]);

  }

})

