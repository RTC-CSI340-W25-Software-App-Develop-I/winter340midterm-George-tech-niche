//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

function renderReview(review) {
  // create a container for the review
  const container = document.createElement("div");
  container.ClassName = "review_container";

  // create profile image
  const img = document.createElement("img");
  img.src = review.image;

  //create user info and review content
  const info =document.createElement("div");
  const username = document.createElement("p");
  username.textContent = review.username;

  const stars = document.createElement("p");
  stars.textContent = `⭐${review.star}`

  const text = document.createElement("p")
  text.textContent = review.review;

  // append details to the info contaner
  info.append(username, stars, text);

  //appending info and image to the container
  container.append(img, info);

  // append the container and info to the reviews section
  document.querySelector('.reviews').appendChild(container);

}


// render all existing reviews 
reviews.forEach(renderReview);

// file submission handling to add new reviews
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
 e.preventDefault();

 // extract values from the form fields
 const username = e.target.username.value;
 const image = e.target.image.value || './image/cafe.png'   //default image
 const star = parseInt(e.target.star.value);
 const review = e.target.review.value;

 // create a new review object
 const newReview = {username, image, star, review};

 // add the new review to the reviews array
 reviews.push(newReview);

 renderReview(newReview);

 //reset the form
 form.reset();


} );



/////////////////////////////////////////////////////////////////////

//1. Append the reviews to the DOM

//2. Append new reviews to the DOM from the form
