export function populateCarousel(
  carouselWrapperElement,
  carouselImgObjectArray
) {
  carouselImgObjectArray.forEach((imgObject) => {
    let imgWrapper = document.createElement("div");
    // imgWrapper.style.visibility = 'hidden'
    let image = document.createElement("img");
    image.src = imgObject.link;
    image.alt = imgObject.altText;
    imgWrapper.appendChild(image);
    carouselWrapperElement.appendChild(imgWrapper);
  });
}
