export function populateCarousel(
  carouselWrapperElement,
  carouselImgObjectArray
) {
  let diskWrapper = document.createElement("div");
  // create carousel
  carouselImgObjectArray.forEach((imgObject) => {
    let imgWrapper = document.createElement("div");
    // imgWrapper.style.visibility = 'hidden'
    let image = document.createElement("img");
    image.src = imgObject.link;
    image.alt = imgObject.altText;
    image.style.display = "none";
    imgWrapper.appendChild(image);
    carouselWrapperElement.appendChild(imgWrapper);

    let disk = document.createElement("span");
    disk.textContent = "🔴";
    disk.classList.add("disk");
    if (carouselImgObjectArray[0] === imgObject) {
      disk.classList.add("disk-active");
      image.style.display = "block";
    }
    disk.addEventListener("click", () => {
      // clear disks
      let allDisks = Array.from(document.querySelectorAll(".disk"));
      allDisks.forEach((disk) => {
        disk.classList.remove("disk-active");
      });
      // clear images
      let allImages = Array.from(document.querySelectorAll("img"));
      allImages.forEach((img) => {
        img.style.display = "none";
      });
      image.style.display = "block";
      disk.classList.add("disk-active");
    });
    diskWrapper.appendChild(disk);
    document.getElementById("carousel-wrapper").appendChild(diskWrapper);
  });

  // create markers
}
