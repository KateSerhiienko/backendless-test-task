// theme

const wrapper = document.querySelector(".wrapper");
const themes = document.getElementsByName("theme");
const select = document.querySelector("select");

const fieldsThemes = {
  "input": "checked",
  "option": "selected",
  "button": "disabled",
};

function setTheme(event) {
  removeTheme();
  wrapper.classList.add(event.target.value);
  changeTheme(event.target.value);
}

function removeTheme() {
  wrapper.classList = ["wrapper"];
}

function changeTheme(eventValue) {
  for (let fieldTheme in fieldsThemes) {
    let fieldsList = document.querySelectorAll(fieldTheme);
    fieldsList.forEach(field => field.value === eventValue ? field[fieldsThemes[fieldTheme]] = true : field[fieldsThemes[fieldTheme]] = false);
  }
}

themes.forEach(theme => theme.addEventListener("click", setTheme));
select.addEventListener('change', setTheme)



// modal

const body = document.querySelector("body");
const images = document.querySelectorAll(".image");
const modalOverlay = document.querySelector(".modal-overlay");
const modalImage = document.querySelector(".modal-image");
const modalClose = document.querySelector(".modal-close");

modalOverlay.addEventListener('click', function (e) {
  e.stopPropagation();
  return false;
})

function openModal() {
  this.classList.add("choosed");
  modalOverlay.classList.add("opened");
  modalImage.src = this.src;
}
images.forEach(image => image.addEventListener("click", openModal));

function closeModal() {
  images.forEach(image => image.classList.remove("choosed"));
  modalOverlay.classList.remove("opened");
}
modalClose.addEventListener("click", closeModal);