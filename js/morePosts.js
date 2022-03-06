function morePostsFunction() {
  var showPosts = document.querySelector("#show-posts");
  var moreBlogPosts = document.querySelector("#more-blog-posts");
  var morePostsBtn = document.querySelector("#morePostsBtn");

  if (showPosts.style.display === "none") {
    showPosts.style.display = "inline";
    moreBlogPosts.style.display = "none";
    morePostsBtn.innerHTML = "See more";
  } else {
    showPosts.style.display = "none";
    moreBlogPosts.style.display = "inline";
    morePostsBtn.innerHTML = "See less ";
  }
}