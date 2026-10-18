// const formRegistration = document.querySelector('.form-registration')
// const registrForm = document.getElementById("registration")
// const modalForm = document.getElementById("modal")
// const closeWeb = document.getElementById("close-web")

export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
  }

  openModalWindow() {
    this.modal.classList.add('open');
  }

  closeModalWindow() {
    const closeBtn = document.getElementById("close-web");
    closeBtn.addEventListener('click', () => {
      this.modal.classList.remove('open');
    });
  }

  close() {
    this.modal.classList.remove('open');
  }

  isOpen() {
    return this.modal.classList.contains('open');
  }
}
// const newModal = new Modal('modal')
// newModal.openModalWindow()
// newModal.closeModalWindow()
// console.log(newModal.openOrNot())

// class FormBtn {
//   constructor(idFormBtn) {
//     this.idForm = document.getElementById(idFormBtn);
//   }

//   getForm() {
//     this.idForm.addEventListener("submit", (event) => {
//       event.preventDefault();
//       const form = event.target;
//       const formData = new FormData(form);
//       const data = Object.fromEntries(formData);
//       console.log(data);
//     });
//   }
// }

// const newForm = new FormBtn('email-form');
// newForm.getForm();


// class GetFormData{
//   constructor(idFormData){
//     this.formRegistration = document.getElementById(idFormData)
//   }
//   getData(){
//     this.formRegistration.addEventListener("submit", (event) =>{
//   event.preventDefault()
//   const form = event.target
//   const formData = new FormData(form)
//   const data = Object.fromEntries(formData)
//   data.createdOn = new Date()
//   const modalPassword = document.getElementById("modal-password")
//   const modalPasswordAgain = document.getElementById("modal-passwordAgain")
//   if (modalPassword.checkValidity() === false || modalPasswordAgain.checkValidity() === false) {
//     alert('Введите корректно поля пароля!')
//   } else if (modalPassword.value !== modalPasswordAgain.value) {
//     alert('Введите одинаковые пароли!')
//   }else {
//     alert('Регистрация пройдена успешно')
//     newModal.close()
//     user = data
//   }
// console.log(user)
// })
//   }
// }

// const second = new GetFormData('form-registration')
// second.getData()



