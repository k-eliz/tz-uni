// Открыть модальное окно
document
  .getElementById("open-modal-btn")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open");
  });

// Закрыть модальное окно
document
  .getElementById("close-my-modal-btn")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open");
  });

// Закрыть модальное окно при нажатии на Esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal").classList.remove("open");
  }
});

// Закрыть модальное окно при клике вне его
document
  .querySelector("#my-modal .modal__box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.getElementById("my-modal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});

//Валидация формы
function validation(form) {
  let result = true;
  form.querySelectorAll("input").forEach((input) => {
    removeError(input);
    if (input.value == "") {
      createError(input, "Поле не заполнено");
      result = false;
    }
  });
  return result;
}
//Создание ошибки
function createError(input, text) {
  const parent = input.parentNode;
  const errorLabel = document.createElement("label");
  errorLabel.classList.add("error-label");
  errorLabel.textContent = text;
  parent.classList.add("error");
  parent.append(errorLabel);
}
//Удаление ошибки
function removeError(input) {
  const parent = input.parentNode;
  if (parent.classList.contains("error")) {
    parent.querySelector(".error-label").remove();
    parent.classList.remove("error");
  }
}
const beautifulInput = document.getElementById("beautiful-input");
const hiddenInput = document.getElementById("hidden-input");

beautifulInput.addEventListener("click", () => {
  hiddenInput.click();
});

document.getElementById("form-input").addEventListener("submit", (event) => {
  event.preventDefault();
  if (validation(document.getElementById("form-input")) === true) {
    alert("Форма успешно отправлена!");
    document.getElementById("my-modal").classList.remove("open");
  }
});
