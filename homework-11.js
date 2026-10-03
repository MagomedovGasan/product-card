const emailForm = document.querySelector('#email-form')
emailForm.addEventListener("submit", (event) =>{
  event.preventDefault()
  const form = event.target
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  console.log(data)
})

let user = null
const formRegistration = document.getElementById("form-registration")
const submitBtn = document.getElementById("submit-btn")
const modalForm = document.getElementById("modal")
const closeWeb = document.getElementById("close-web")
const registrForm = document.getElementById("registration")
registrForm.addEventListener("click", () => {
  modalForm.classList.add('open')
})

formRegistration.addEventListener("submit", (event) =>{
  event.preventDefault()
  const form = event.target
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  data.createdOn = new Date()
  const modalPassword = document.getElementById("modal-password")
  const modalPasswordAgain = document.getElementById("modal-passwordAgain")
  if(modalPassword.checkValidity() === false || modalPasswordAgain.checkValidity() === false){
    alert('Введите корректно поля пароля!')
  } else if(modalPassword.value !== modalPasswordAgain.value){
    alert('Введите одинаковые пароли!')
  }else{
    alert('Регистрация пройдена успешно')
    modalForm.classList.remove("open")
    user = data
  }
console.log(user)
})

closeWeb.addEventListener("click", () => {
  modalForm.classList.remove("open")
})