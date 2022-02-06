let wrapper = document.querySelector(".wrapper");
let themes = document.getElementsByName("theme");
let select = document.querySelector("select");

themes.forEach(theme => theme.addEventListener("click", setTheme));
select.addEventListener('change', setTheme)

function setTheme(event) {
  removeTheme();
  wrapper.classList.add(event.target.value);
}

function removeTheme() {
  console.log(wrapper.classList);
  wrapper.classList = ["wrapper"];
}