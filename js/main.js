let dark = document.querySelector(".theme");
let check = document.querySelector("#cb");

if (localStorage.getItem("dark") === "dark") {
  dark.classList.add("dark");
  check.checked=true
}

check.addEventListener("click", () => {
  dark.classList.toggle("dark");
  localStorage.setItem("dark", dark.classList.item(1));
});
