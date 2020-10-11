// Selecting an element
const list = document.querySelector("#players"); // CSS id selector
// or
const list = document.getElementById("players");

// Append Content
list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");


const avatars = document.querySelectorAll("img");

avatars.forEach((avatar) => {
  avatar.addEventListener("click", () => {
    debugger
    avatar.classList.toggle("rounded");
  });
})

