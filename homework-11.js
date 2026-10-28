import { Modal } from "./modal.js"
import { Form } from "./form.js"

const emailForm = document.querySelector('#email-form')
emailForm.addEventListener("submit", (event) =>{
  event.preventDefault()
  const form = event.target
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  console.log(data)
})


const registrForm = document.getElementById("registration")
registrForm.addEventListener("click", () => {
  newModal.openModalWindow()
})


export const newModal = new Modal('modal')
console.log(newModal.isOpen())

let user = null;

const newForm = new Form('form-registration');

newForm.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = newForm.getData()
  data.createdOn = new Date();

  const modalPassword = document.getElementById("modal-password");
  const modalPasswordAgain = document.getElementById("modal-passwordAgain");

  if (modalPassword.checkValidity() === false || modalPasswordAgain.checkValidity() === false) {
    alert('Введите корректно поля пароля!');
  } else if (modalPassword.value !== modalPasswordAgain.value) {
    alert('Введите одинаковые пароли!');
  } else {
    alert('Регистрация пройдена успешно');
    newModal.close()
    user = data;
    console.log(user)
    newForm.resetFormData()
  }
})

console.log(newForm.isFormValid())
