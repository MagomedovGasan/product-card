export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.initCloseListener()
  }

  openModalWindow() {
    this.modal.classList.add('open');
  }

   initCloseListener() {
    const closeBtn = document.getElementById("close-web");
    closeBtn.addEventListener('click', () => {
      this.close()
    });
  }

  close() {
    this.modal.classList.remove('open');
  }

  isOpen() {
    return this.modal.classList.contains('open');
  }
}
