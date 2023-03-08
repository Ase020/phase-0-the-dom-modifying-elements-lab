// after index.js is processed
// has a 'newHeader' variable that points to an <h1> node

document.getElementById("main").remove();

// after index.js is processed
// the 'newHeader' variable that points to the <h1> node has an id of 'victory'
const newHeader = document.createElement("h1");

// after index.js is processed
// the 'newHeader' variable that points to the <h1> node has an id of 'victory'
newHeader.id = "victory";

// after index.js is processed
// the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it:
newHeader.innerHTML = "<h1>Felix is the champion</h1>";
