export default class modalWindow {
     #container
   
     constructor() {
          this.#container = document.createElement('div')
          this.#container.className = 'modal-overlay modal-overlay_hidden'
          this.#container.id = 'modal-window'
     }
   
     render() {

          const modalWindowContaner = document.createElement('div')
          modalWindowContaner.className = 'modal-container'

          const divCloseModalButton = document.createElement('div');
          divCloseModalButton.className = 'div-close-modal-button';
          const closeModalButton = document.createElement('i');
          closeModalButton.className = 'bi bi-x-circle';
          closeModalButton.id = 'close-button'

          const divImageModal = document.createElement('div');
          divImageModal.className = 'div-delete-modal';
          const imageModal = document.createElement('img');
          imageModal.className = 'image-modal';
      
          modalWindowContaner.append(divCloseModalButton)
          modalWindowContaner.append(divImageModal)
          divCloseModalButton.append(closeModalButton)
          divImageModal.append(imageModal)
          this.#container.append(modalWindowContaner);

          return this.#container
     }

     showModal(imageUrl) {

          const imageModal = document.querySelector('.image-modal')
          imageModal.src = imageUrl

          this.#container.addEventListener('click', (event) => {
               const { target } = event
               if (target.id === 'modal-window' || target.id === 'close-button') {
                    imageModal.src = ''
                    this.#container.classList.add('modal-overlay_hidden')                    
               }               
          })
     }

}     