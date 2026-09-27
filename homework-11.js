const emailForm = document.querySelector('#email-form')
emailForm.addEventListener("submit", (event) =>{
  event.preventDefault()
  const form = event.target
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  console.log(data)
})

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
  const forms = event.target
  const formsData = new FormData(forms)
  const datas = Object.fromEntries(formsData)
  console.log(datas)
})

closeWeb.addEventListener("click", () => {
  modalForm.classList.remove("open")
})

