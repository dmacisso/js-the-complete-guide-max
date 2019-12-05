// const h1 = document.getElementById("main-title");

// h1.textContent = "Some New Title";
// h1.style.color = "white";
// h1.style.backgroundColor = "black";

// const body = document.body;

// const li = document.querySelector("ul li:last-of-type");
// // const listItemElements = document.querySelectorAll("li");
// const listItemElements = document.getElementsByTagName("li");
// li.textContent = li.textContent + " (Changed!)";

// for (const listItemEl of listItemElements) {
//   console.dir(listItemEl);
// }

const section = document.querySelector("section");
const button = document.querySelector("button");

// section.style.backgroundColor = "blue";
section.className = "red-bg";

button.addEventListener("click", () => {
  // if (section.className === "red-bg visible") {
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible";
  // }
  // section.classList.toggle('visible')
  section.classList.toggle('invisible')
});
