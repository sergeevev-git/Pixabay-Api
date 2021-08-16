export default class Gallery {
     #container
   
     constructor(showModal) {
          this.#container = document.createElement('div')
          this.#container.className = 'gallery-container'

          this.showModal = showModal
     }

     renderImagesContainer() {
          
          const allImagesContainer = document.createElement('div')
          allImagesContainer.className = 'row row-cols-1 row-cols-md-5 g-5'
          allImagesContainer.id = 'all-images-container'
          
          allImagesContainer.addEventListener('click', event => {
               const { target } = event
               const image = target.closest('#image')
               
               if (image) {
                    const modalOverlayWindow = document.querySelector('#modal-window')
                    modalOverlayWindow.classList.remove('modal-overlay_hidden')
                    this.showModal(image.dataset.fullSizeImg)
               }
               
          })

          this.#container.append(allImagesContainer)

          return this.#container

     }
   
     renderGallery(arrOfImages) {

          const allImagesContainer = document.querySelector('#all-images-container')

          for (const item of arrOfImages) {
               const itemOfGallery = this.createCard(item)
               allImagesContainer.append(itemOfGallery)
          }

     }


     createCard(item) {

          const itemContainer = document.createElement('div')
          itemContainer.id = 'item-container'

          const imgContainer = document.createElement('div')
          imgContainer.id = 'img-container'
          
          const imgFooterContainer = document.createElement('div')
          imgFooterContainer.className = 'img-footer-container'

          const imageItem = document.createElement('img')
          imageItem.src = item.previewURL
          imageItem.dataset.fullSizeImg = item.largeImageURL
          imageItem.id = 'image'
          imageItem.title = item.tags

          const imageAttributes = document.createElement('ul')
          imageAttributes.className = 'list-group list-group-horizontal'
          
          const imageLikes = document.createElement('li')
          imageLikes.className = 'list-group-item'
          imageLikes.innerHTML = `<i class="bi bi-heart"> ${item.likes}</i>`
          imageLikes.id = 'image-attributes'

          const imageComments = document.createElement('li')
          imageComments.className = 'list-group-item'
          imageComments.innerHTML = `<i class="bi bi-card-text"> ${item.comments}</i>`
          imageComments.id = 'image-attributes'

          const imageViews = document.createElement('li')
          imageViews.className = 'list-group-item'
          imageViews.innerHTML = `<i class="bi bi-eye"> ${item.views}</i>`
          imageViews.id = 'image-attributes'

          const imageDownloads = document.createElement('li')
          imageDownloads.className = 'list-group-item'
          imageDownloads.innerHTML = `<i class="bi bi-cloud-arrow-down"> ${item.downloads}</i>`
          imageDownloads.id = 'image-attributes'

          itemContainer.append(imgContainer, imgFooterContainer)
          imgContainer.append(imageItem)
          imageAttributes.append(imageLikes, imageComments, imageViews, imageDownloads)
          imgFooterContainer.append(imageAttributes)

          return itemContainer

     }

}     