import "./style.css";
import { populateDropdown } from "./dropdown.js";
import { populateCarousel } from "./carousel.js";

let ddArray = Array.from(document.querySelectorAll(".dropdown"));
populateDropdown(ddArray);

let imgArray = [
  {
    link: "https://media.gettyimages.com/id/2134240641/photo/pug-dog-portrait.jpg?s=612x612&w=gi&k=20&c=mF2EIGYYkQcSUQ14wIXSoo1KXS_c2IvE_1gXnWvFrVQ=",
    altText: "pug",
  },
  {
    link: "https://media.gettyimages.com/id/2043042354/photo/professional-young-swimmers-in-a-swimming-pool.jpg?s=612x612&w=gi&k=20&c=FpzOuJm2MuBNFy3FGZtJ4zAYMLBsOLPQjP0CvX9Am5c=",
    altText: "robot",
  },
  {
    link: "https://media.gettyimages.com/id/1757252335/photo/portraits-of-avatars-of-cat-shaped-robots.jpg?s=612x612&w=gi&k=20&c=yP7ZWW_tAGu7BbmXDius_pwUgmH9myvwR60vMwX_-gU=",
    altText: "swimmers",
  },
  {
    link: "https://media.gettyimages.com/id/1977180734/photo/watermelon-smoothies-in-glass-on-light-table-with-shadow-sunlights-top-view-with-copy-space.jpg?s=612x612&w=gi&k=20&c=NBF8vgQZFlFNl15BvcwL-3Fi3tCsNnQntDHiOnkLoTM=",
    altText: "watermelon",
  },
];
populateCarousel(document.getElementById("carousel"), imgArray);
