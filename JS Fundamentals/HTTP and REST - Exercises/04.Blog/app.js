function attachEvents() {
  const selectContainer = document.querySelector("#posts");
  const postTitle = document.querySelector("#post-title");
  const postBody = document.querySelector("#post-body");
  const postComments = document.querySelector("#post-comments");
  let posts;

  document.querySelector("#btnLoadPosts").addEventListener("click", loadPosts);
  document.querySelector("#btnViewPost").addEventListener("click", viewPosts);

  async function loadPosts() {
    const data = await (
      await fetch("http://localhost:3030/jsonstore/blog/posts")
    ).json();
    posts = Object.values(data);

    posts.forEach((element) => {
      selectContainer.appendChild(create(element.title, element.id));
    });
  }

  async function viewPosts() {
    postTitle.innerHTML = "";
    postBody.innerHTML = "";
    postComments.innerHTML = "";
    const data = await (
      await fetch("http://localhost:3030/jsonstore/blog/comments")
    ).json();

    const comments = Object.values(data);
    const postData = posts.find((post) => post.id === selectContainer.value);

    postTitle.textContent = postData.title;
    postBody.textContent = postData.body;

    comments.forEach((element) => {
      if (element.postId === postData.id) {
        let appendComment = document.createElement("li");
        appendComment.textContent = element.text;
        appendComment.value = element.id;
        postComments.appendChild(appendComment);
      }
    });
  }

  function create(content, value) {
    const element = document.createElement("option");
    element.textContent = content;
    element.value = value;

    return element;
  }
}

attachEvents();
