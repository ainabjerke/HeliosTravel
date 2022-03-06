const detailContainer = document.querySelector(".blog-specific-content");
const resultsContainer = document.querySelector(".loadingPosts");
const queryString = document.location.search;

const modalContentLightboxContainer = document.querySelectorAll(
  ".modal-content-lightbox"
);

console.log(modalContentLightboxContainer);
const mySlidesContainer = document.querySelectorAll(".mySlides");
// const columnLightboxContainer = document.querySelectorAll(".column-lightbox");

const params = new URLSearchParams(queryString);
const id = params.get("id");
const url =
  "https://ainabjerke.com/projectExam1/wp-json/wc/store/products/" + id;

//fetching data form wordpress via API using queryString to display a selected blog posts
async function getBlogSpecificPosts() {
  try {
    const response = await fetch(url);

    const getResults = await response.json();

    displayBlogSpecificContentHTML(getResults);
    lightboxCarousel(getResults);
  } catch (error) {
    resultsContainer.innerHTML = errorMessage(
      "Unable to get the description based on API call."
    );
  }
}
getBlogSpecificPosts();

function lightboxCarousel(pictures) {
  console.log(pictures.images);
  // for (let i = 0; i < pictures.length; i++) {
  //   if (i <= 4) {
    modalContentLightboxContainer.innerHTML += `<div class="mySlides">

                                                <img
                                                src="${pictures.images[0].src}"
                                                                      
                                              />
                                          

                                    </div>`;
    }
//   }
// }

// function lightboxCarousel(pictures) {
//   console.log(pictures.images);
//   for (let i = 0; i < pictures.length; i++) {
//     if (i <= 4) {
//       modalContentLightboxContainer.innerHTML += `<div class="mySlides">

//                                           <img src = "${pictures.images.src}" alt="${pictures.images.alt}">

//                                     </div>`;
//     }
//   }
// }

// function lightboxCarousel(pictures) {
//   for (let i = 0; i < pictures.length; i++) {
//     if (i <= 4) {
//       modalContentLightbox.innerHTML += `<div class="mySlides">

//                                           <img src = "${pictures.images[i].src}" alt="${pictures.images[i].alt}">
//                                           <p>${pictures.name}</p>

//                                     </div>`;
//     }
//   }
// }

// function lightboxCarousel(pictures) {
//   for (let i = 0; i < pictures.length; i++) {
//     if (i <= 4) {
//       modalContentLightbox.innerHTML += `<div class="mySlides">

//                                           <img src = "${pictures.images[i].src}" alt="${pictures.images[i].alt}">
//                                           <p>${pictures.name}</p>

//                                     </div>`;
//     }
//   }
// }

// function to display selected data from API
function displayBlogSpecificContentHTML(posts) {
  // console.log(posts.images);
  detailContainer.innerHTML += `<div class="blog-details-api">
                                  <img
                                    src="${posts.images[0].src}"
                                    alt="${posts.images[0].alt}"                         
                                    onclick="openModalLightbox();currentSlideLightbox(1)"
                                    class="modal-hover-opacity"
                                  />
                                  <div>
                                    <h2>${posts.name}</h2>
                                    <p>${posts.short_description}</p>
                                    <hr />
                                  </div>
                                  <div>
                                    <h2>Travel tips</h2>
                                    <p>${posts.description}</p>
                                    <hr />
                                  </div>
                                  <div>
                                    <h2>Post a comment:</h2>
                                    <div id="message"></div>
                                    <form id="contactForm">
                                      <input type="hidden" name="post" value="${id}" />
                                      <div class="container-contact-form">
                                        <div>
                                          <label for="textArea">
                                            <i class="far fa-edit"></i>
                                            <textarea
                                              id="textArea"
                                              name="textArea"
                                              placeholder="Your message.."
                                            ></textarea>
                                          </label>
                                          <div class="form_error" id="textAreaError">
                                          Please fill in your comments with a minimum of 25 characters
                                          </div>
                                        </div>
                                        <div>
                                          <label>
                                            <i class="fas fa-user-alt"></i>
                                            <input name="fullName" id="fullName" placeholder="Full name" />
                                          </label>
                                          <div class="form_error" id="fullNameError">
                                          Please enter your full name with a minimum of 5 characters
                                          </div>
                                        </div>
                                        <div>
                                          <label>
                                            <i class="fas fa-envelope"></i>
                                            <input name="email" id="email" placeholder="Email" />
                                          </label>
                                          <div class="form_error" id="emailError">Please enter a valid email</div>
                                        </div>
                                        <button class="submit_button">Submit</button>
                                      </div>
                                    </form>
                                  </div>
                              </div> `;
  var form = document.querySelector("#contactForm");
  form.addEventListener("submit", SendComment);
  document.querySelector(".loader").style.display = "none";
}

//function that validates contact form input data
function validateForm() {
  let error = false;

  let authorName = document.querySelector("#fullName");
  let textArea = document.querySelector("#textArea");
  let email = document.querySelector("#email");
  let authorNameError = document.querySelector("#fullNameError");
  let textAreaError = document.querySelector("#textAreaError");
  let emailError = document.querySelector("#emailError");
  if (checkLength(authorName.value, 5) === true) {
    authorNameError.style.display = "none";
  } else {
    authorNameError.style.display = "block";
    error = true;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    error = true;
  }

  if (checkLength(textArea.value, 25) === true) {
    textAreaError.style.display = "none";
  } else {
    textAreaError.style.display = "block";
    error = true;
  }

  return !error;
}
// function to validate and send comments to wordpress
function SendComment(event) {
  event.preventDefault();
  if (!validateForm()) return;

  document.querySelector(".loader").style.display = "block";

  let message = document.querySelector("#message");

  let authorName = document.querySelector("#fullName").value;
  let content = document.querySelector("#textArea").value;
  let authorEmail = document.querySelector("#email").value;
  var form = document.querySelector("#contactForm");

  let url = "https://ainabjerke.com/projectExam1/wp-json/wp/v2/comments";

  const data = JSON.stringify({
    post: id,
    author_name: authorName,
    author_email: authorEmail,
    content: content,
  });
  fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: data,
  })
    .then((response) => {
      if (response.ok === true) {
        message.innerHTML = "Comment submitted successfully";
        form.reset();
      }
      return response.json();
    })
    .then((object) => {
      if (object.message != undefined)
        message.innerHTML = "Post comment failed:" + object.message;
      document.querySelector(".loader").style.display = "none";
    })
    .catch((error) => {
      message.innerHTML = "Post comment failed:" + error;
      document.querySelector(".loader").style.display = "none";
    });
}
