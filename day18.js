console.log(document.getElementsByClassName("firstbox"))
console.log(document.querySelector(".firstbox"))
console.log(document.querySelectorAll(".firstbox"))

const childNodeayt = document.createElement("div");
childNodeayt.classList.add("myStyle");
document.getElementById("second").appendChild(childNodeayt)