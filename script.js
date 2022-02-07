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

const images = document.querySelectorAll(".image");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalImage = document.querySelector(".modal-image");
const modalClose = document.querySelector(".modal-close");

modalWrapper.addEventListener('click', function (e) {
  e.stopPropagation();
  return false;
})

function openModal() {
  modalWrapper.classList.add("opened");
  modalImage.src = this.src;
  document.body.style.overflow = 'hidden';
}
images.forEach(image => image.addEventListener("click", openModal));

function closeModal() {
  modalWrapper.classList.remove("opened");
  document.body.style.overflow = '';
}
modalClose.addEventListener("click", closeModal);