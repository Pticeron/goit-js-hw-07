import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// {/* <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg"
//    alt="Image description" />
// </a> */}

const gallery = document.querySelector('.gallery')
// const markup = creatGalleryMarkup(galleryItems);

// gallery.innerHTML = markup;

// function creatGalleryMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
// <a class="gallery__item" href="large-image.jpg">
//     <img
//     class="gallery__image"
//     src="${preview}"
//     data-source="${original}"
//     alt="${description}"
//     />
// </a>
// `;
// }).join(``);

//   console.log(markup);
// }

const items = []

galleryItems.forEach(element => {
	const galleryItem = document.createElement(`li`)
	galleryItem.className = `gallery-item`
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
	galleryImage.className = 'gallery__image'
	galleryImage.src = element.preview
	galleryImage.setAttribute('title', element.description)
	galleryImage.alt = element.description

    galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	items.push(galleryItem)
})
gallery.append(...items)


new SimpleLightbox('.gallery a', {
	captionDelay: 250
})