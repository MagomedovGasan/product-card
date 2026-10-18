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
import { newModal } from "./homework-11.js";

let user = null;

class GetFormData {
  constructor(idFormData) {
    this.formRegistration = document.getElementById(idFormData);
  }

  getData() {
    this.formRegistration.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const form = event.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
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
      }
      
      console.log(user);
    });
  }
  isFormValid(){
    // if(this.formRegistration){
      return this.formRegistration.checkValidity()
    // }
    // return false
}
  resetFormData(){
    this.formRegistration.reset()
  }

}

const newGetFormData = new GetFormData('form-registration');
newGetFormData.getData();
newGetFormData.resetFormData()
console.log(newGetFormData.isFormValid())


