export class Form {
  constructor(idFormData) {
    this.form = document.getElementById(idFormData);
  }

  getData() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);
    return data;
  }

  isFormValid() {
    return this.form.checkValidity();
  }

  resetFormData() {
    this.form.reset();
  }
}