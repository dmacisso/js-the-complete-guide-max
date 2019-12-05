// TASK 1
const task1 = document.getElementById("task-1");
// OR
const taskOne = document.querySelector("#task-1");
// OR
const taskEL = document.querySelector("li");

taskOne.style.backgroundColor = "black";
task1.style.color = "white";

//TASK 2
const head = document.head.querySelector("title");
//OR
const title = document.querySelector("title");

head.textContent = "My Assignment Solved";
//OR
title.textContent = "Assignment Solved!";

//TASK 3
const h1 = document.querySelector("h1");
h1.textContent = "Assignment-Solved!";

//OR
const hOne = document.getElementsByTagName('h1')
hOne[0].textContent = "My Assignment-Solved"