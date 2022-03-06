const resultsContainer = document.querySelector(".loadingPosts");
const latestPostsFirst = document.querySelector(".carouselOne");
const latestPostsSecond = document.querySelector(".carouselTwo");
const latestPostsThird = document.querySelector(".carouselThree");

const url =
  "https://ainabjerke.com/projectExam1/wp-json/wc/store/products/?per_page=30";

//fetch data from api
async function getLatestBlogposts() {
  try {
    const response = await fetch(url);

    const getResults = await response.json();

    createLatestBlogContentHTML(getResults);
  } catch (error) {
    resultsContainer.innerHTML = errorMessage(
      "Unable to get the description based on API call."
    );
  }
}
getLatestBlogposts();

//post data from api on home/index page
function createLatestBlogContentHTML(posts) {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
  }, 10);
  for (let i = 13; i < posts.length; i++) {
    if (i <= 15) {
      latestPostsFirst.innerHTML += `<div class="column latest-posts-sub-heading">
                                          <a href="blog-specific-page.html?id=${posts[i].id}">
                                          <img src = "${posts[i].images[0].src}" alt="${posts[i].images[0].alt}">
                                          <p>${posts[i].name}</p>
                                          <a href="blog-specific-page.html?id=${posts[i].id}" class="btn-read-more">Read more</a>
                                          </a>
                                    </div>`;
    } else if (i <= 18) {
      latestPostsSecond.innerHTML += `<div class="column latest-posts-sub-heading">
                                          <a href="blog-specific-page.html?id=${posts[i].id}">
                                          <img src = "${posts[i].images[0].src}" alt="${posts[i].images[0].alt}">
                                          <p>${posts[i].name}</p>
                                          <a href="blog-specific-page.html?id=${posts[i].id}" class="btn-read-more">Read more</a>
                                          </a>
                                      </div>`;
    } else if (i <= 21) {
      latestPostsThird.innerHTML += `<div class="column latest-posts-sub-heading">
                                        <a href="blog-specific-page.html?id=${posts[i].id}">
                                        <img src = "${posts[i].images[0].src}" alt="${posts[i].images[0].alt}">
                                        <p>${posts[i].name}</p>
                                        <a href="blog-specific-page.html?id=${posts[i].id}" class="btn-read-more">Read more</a>
                                        </a>
                                    </div>`;
    }
  }
}
