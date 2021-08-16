import * as Utils from '../core/Utils'

export default class SearchForm {
     #container;
   
     constructor(createNewrequest, renderGallery) {

          // this.#container = document.createElement('div')
          // this.#container.className = 'search-form-container'
          this.#container = Utils.createElement('div', 'search-form-container', 'search-form-container')
          this.createNewrequest = createNewrequest
          this.renderGallery = renderGallery
          
     }
   
     render() {

          const divSearchForm = document.createElement('div')
          divSearchForm.id = 'div-search-form'

          const searchForm = document.createElement('form')
          searchForm.className = 'row'
          searchForm.id = 'search-form'
     
          const divInput = document.createElement('div')
          divInput.className = 'col-auto'

          const searchFormInput = document.createElement('input')
          searchFormInput.className = 'form-control'
          searchFormInput.id = 'form-input'
          searchFormInput.type = 'text'
          searchFormInput.placeholder = 'Search images...'

          const divButton = document.createElement('div')
          divButton.className = 'col-auto'

          const submitFormButton = document.createElement('button')
          submitFormButton.type = 'submit'
          submitFormButton.className = 'btn btn-outline-success'
          submitFormButton.textContent = 'Search'

          searchForm.addEventListener('submit', (event) => {
               event.preventDefault()
                         
               const allImagesContainer = document.querySelector('#all-images-container')
               const loadMoreForm = document.querySelector('#div-load-more-button')

               if (allImagesContainer && loadMoreForm) {
                    allImagesContainer.remove()
                    loadMoreForm.remove()
               }

               const getImages = async () => {
                    
                    try {
                         const response = await this.createNewrequest(searchFormInput.value)
                         // console.log(response)
                         if (!response.ok) {
                              throw new Error('Ошибка получения данных')
                         }
                         let result = await response.json()
                         result = await [...result.hits]
                         // console.log('in request', result)
                         this.renderGallery(result)                              
                    }
                    catch(error) {
                         console.log('error:', error)
                    }
                    finally {
                    }                    
               }
               
               getImages()

               searchFormInput.value = ''
          });
     
          
          divInput.append(searchFormInput)
          divButton.append(submitFormButton)
          searchForm.append(divInput, divButton)
          divSearchForm.append(searchForm)
          this.#container.append(divSearchForm)
     
          return this.#container
     }
   }
   