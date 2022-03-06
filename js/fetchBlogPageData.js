//content displayed on blog page
const blogPostsContainerOne = document.querySelector(".blog-posts-container1");
const blogPostsContainerTwo = document.querySelector(".blog-posts-container2");
const blogPostsContainerThree = document.querySelector(
  ".blog-posts-container3"
);
const blogPostsContainerFour = document.querySelector(".blog-posts-container4");
const blogPostsContainerFive = document.querySelector(".blog-posts-container5");

const url =
  "https://ainabjerke.com/projectExam1/wp-json/wc/store/products/?per_page=30";

//fetch data from api
async function getBlogposts() {
  try {
    document.querySelector(".loader").style.display = "block";
    const searchString = document
      .querySelector("#searchBar")
      .value.toLowerCase();
    const response = await fetch(url);

    const getResults = await response.json();
    const filteredBlogPosts = getResults.filter((posts) => {
      return posts.name.toLowerCase().includes(searchString);
    });

    createBlogPageContentHTML(filteredBlogPosts);
  } catch (error) {
    document.querySelector(".loader").style.display = "none";
    resultsContainer.innerHTML = errorMessage(
      "Unable to get the description based on API call."
    );
  }
}
getBlogposts();

//post data from api on blog page
function createBlogPageContentHTML(posts) {
  document.querySelector(".loader").style.display = "none";
  blogPostsContainerOne.innerHTML = "";
  blogPostsContainerTwo.innerHTML = "";
  blogPostsContainerThree.innerHTML = "";
  blogPostsContainerFour.innerHTML = "";
  blogPostsContainerFive.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].name);
    if (i <= 1) {
      blogPostsContainerOne.innerHTML += ` <div class="column latest-posts-sub-heading bp1-flex">
                                          <a href="blog-specific-page.html?id=${posts[i].id}">
                                          <img src = "${posts[i].images[0].src}" alt="${posts[i].images[0].alt}"> 
                                          <p>${posts[i].name}</p>
                                          <a href="blog-specific-page.html?id=${posts[i].id}" class="btn-read-more">Read more</a>
                                          </a>
                                           </div>`;
    } else if (i <= 4) {
      blogPostsContainerTwo.innerHTML += ` <div class="column latest-posts-sub-heading">
                                          <a href="blog-specific-page.html?id=${posts[i].id}">
                                          <img src = "${posts[i].images[0].src}" alt="${posts[i].images[0].alt}">
                                          <p>${posts[i].name}</p>
                                          <a href="blog-specific-page.html?id=${posts[i].id}" class="btn-read-more">Read more</a>
                                          </a>
                                           </div>`;
    } else if (i <= 6) {
      blogPostsContainerThree.innerHTML += `<div class="column latest-posts-sub-heading bp1-flex">
                                          <a href="blog-specific-page.html?id=${posts[i].id}">
                                          <img src = "${posts[i].images[0].src}" alt="${posts[i].images[0].alt}">
                                          <p>${posts[i].name}</p>
                                          <a href="blog-specific-page.html?id=${posts[i].id}" class="btn-read-more">Read more</a>
                                          </a>
                                           </div>`;
    } else if (i <= 9) {
      blogPostsContainerFour.innerHTML += ` <div class="column latest-posts-sub-heading">
                                          <a href="blog-specific-page.html?id=${posts[i].id}">
                                          <img src = "${posts[i].images[0].src}" alt="${posts[i].images[0].alt}">
                                          <p>${posts[i].name}</p>
                                          <a href="blog-specific-page.html?id=${posts[i].id}" class="btn-read-more">Read more</a>
                                          </a>
                                           </div>`;
    } else if (i <= 12) {
      blogPostsContainerFive.innerHTML += ` <div class="column latest-posts-sub-heading">
                                          <a href="blog-specific-page.html?id=${posts[i].id}">
                                          <img src = "${posts[i].images[0].src}" alt="${posts[i].images[0].alt}">
                                          <p>${posts[i].name}</p>
                                          <a href="blog-specific-page.html?id=${posts[i].id}" class="btn-read-more">Read more</a>
                                          </a>
                                           </div>`;
    }
  }
}

// search bar function
searchBar.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) getBlogposts();
});

//search button function
const searchButton = document.querySelector(".search-button");
searchButton.onclick = async function () {
  getBlogposts();
};
