let body = document.querySelector("body");
let main = document.querySelector("main#main");
main.remove();
let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "John is the champion";
body.append(newHeader);