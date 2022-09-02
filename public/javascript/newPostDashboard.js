var headTitle = document.querySelector("#head-title");
headTitle.textContent = "Your Dashboard";  

async function buttonNewPost(event) {
    event.preventDefault();

   prompt("Please press the link Login to start using Tech Blog");
  }
  
  document.querySelector("#new-post-btn").addEventListener("click", buttonNewPost);