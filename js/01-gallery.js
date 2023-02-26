import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// {/* <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div> */}

const gallery = document.querySelector(".gallery");
const markup = creatGalleryMarkup(galleryItems);

gallery.innerHTML = markup;

function creatGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>
`;
}).join(``);

  console.log(markup);
}

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
        
	}
   
    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()

    gallery.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close() 
		}
	})
})



// const close = function(selectedImage, next) {

// 	selectedImage.classList.remove('basicLightbox--visible')

// 	setTimeout(() => {

// 		// Don't continue to remove lightbox when element missing
// 		if (visible(selectedImage) === false) return next()

// 		elem.parentElement.removeChild(selectedImage)

// 		return next()

// 	}, 410)

// 	return true

// }
