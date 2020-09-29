const avatars = document.querySelectorAll("img");

avatars.forEach((avatar) => {
  avatar.addEventListener("click", () => {
    debugger
    avatar.classList.toggle("rounded");
  });
})

console.log("javascript loaded")
