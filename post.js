// let postsData = [
//     { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
//     { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
//     { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
//     { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
//   ];
  
// function renderPosts(post1){

// let {comments} = post1;

// let postsDiv = document.querySelector('#posts');
// let newPostDiv = document.createElement('div');
// let newH3Tag = document.createElement('h3');
// let newImageTag = document.createElement('img');
// let newPTag = document.createElement('p');
// let newButton = document.createElement('button');
// let newInputTag = document.createElement('input');
// let newButtonTwo = document.createElement('button');
// let postFooterDiv = document.createElement('div');
// let commentContainerDiv = document.createElement('div');


// newPostDiv.className = 'post';
// newH3Tag.innerHTML = post1.author;
// newImageTag.setAttribute('src' , post1.image);
// newPTag.innerHTML = post1.content;
// newButton.innerHTML = "Like";
// newInputTag.setAttribute('type' , 'text');
// newInputTag.setAttribute('placeholder','Comment here');
// newButtonTwo.innerHTML = "Comment"
// postFooterDiv.className = 'post-footer';
// postFooterDiv.innerHTML = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
// commentContainerDiv.className = 'comments-container';
// commentContainerDiv.style.display = 'none';

// comments.forEach((comment) => {
//     let commentPTag = document.createElement('p');
//     commentPTag.textContent = comment;
//     commentContainerDiv.appendChild(commentPTag);
// })

// newPostDiv.append(newH3Tag, newImageTag, newPTag, newButton, newInputTag, newButtonTwo, postFooterDiv,commentContainerDiv);

// postFooterDiv.addEventListener('click', () => {
//     if( commentContainerDiv.style.display == 'none' ){
//         commentContainerDiv.style.display = 'block';
//     }
//     else{
//         commentContainerDiv.style.display = 'none';
//     }
    
// });

// postsDiv.appendChild(newPostDiv);
// let buttonColorSetter = false;

// newButton.addEventListener('click',() => {
//     if(buttonColorSetter == false){
//         newButton.style.backgroundColor = 'red'
//         buttonColorSetter = true;
//         post1.likes++;
//         postFooterDiv.innerHTML = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
//     }
//     else{
//         newButton.style.backgroundColor = '';
//         buttonColorSetter = false;
//         post1.likes--;
//         postFooterDiv.innerHTML = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
//     }
   
// });

// newButtonTwo.addEventListener('click',() => {
//     if(newInputTag.value !== ''){
//         comments.push(newInputTag.value);
//     postFooterDiv.innerHTML = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;

//     let commentPTag = document.createElement('p');
//     commentPTag.textContent = newInputTag.value;
//     commentContainerDiv.appendChild(commentPTag);
//     }
   
// });
// };

// for(let i of postsData){
//         renderPosts(i);   
// }


  
//Create the event Listener for the buttons.here
let postsData = [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
  ];
  
  function renderPosts(post1) {
    const postsContainer = document.getElementById('posts');
  
    const postElement = document.createElement('div');
    postElement.classList.add('post');
  
    const authorElement = document.createElement('h3');
    authorElement.textContent = post1.author;
  
    const contentElement = document.createElement('p');
    contentElement.textContent = post1.content;
  
    const imageElement = document.createElement('img');
    imageElement.src = post1.image;
    imageElement.alt = 'Post Image';
  
    const likeButton = document.createElement('button');
    likeButton.textContent = `Like`;
    likeButton.classList.add('like-button');
  
    // Flag to track whether the like button has been clicked
    let likeButtonClicked = false;
  
    // Add eventListener here to update the likes.
    likeButton.addEventListener('click', () => {
      if (!likeButtonClicked) {
        post1.likes++;
        likeButtonClicked = true;
        likeButton.style.backgroundColor = 'red'; // Change the background color to red
        updateFooter();
      }
    });
  
    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Write a comment...';
  
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.classList.add('comment-button');
  
    // Add eventListener here for the comment button
    commentButton.addEventListener('click', () => {
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        post1.comments.push(commentText);
        commentInput.value = ''; // Clear the input field
        renderComments();
        updateFooter();
      }
    });
  
    const postFooter = document.createElement('div');
    postFooter.classList.add('post-footer');
  
    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');
    commentsContainer.style.display = 'none';
  
    function renderComments() {
      commentsContainer.innerHTML = '';
      post1.comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
      });
    }
  
    function updateFooter() {
      postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
    }
  
    updateFooter();
    renderComments();
  
    postElement.appendChild(authorElement);
    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentInput);
    postElement.appendChild(commentButton);
    postElement.appendChild(postFooter);
    postElement.appendChild(commentsContainer);
  
    postFooter.addEventListener('click', () => {
      if (commentsContainer.style.display === 'none') {
        commentsContainer.style.display = 'block';
      } else {
        commentsContainer.style.display = 'none';
      }
    });
  
    postsContainer.appendChild(postElement);
  };

  document.getElementById('postForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    
    const contentInput = document.getElementById('postInput').value;
    const imageInput = document.getElementById('imageInput').files[0];
  
    if ( contentInput.trim() !== '' && imageInput) {
  
      const newPost = {
        id: postsData.length + 1,
        author: 'You',
        content: contentInput,
        likes: 0,
        comments: [],
        image: URL.createObjectURL(imageInput),
      };
  
      postsData.push(newPost);
  
      document.getElementById('postInput').value = '';
      document.getElementById('imageInput').value = '';
  
      renderPosts(newPost);
    }
  });
  
  for(let i of postsData){
    renderPosts(i);
  }





  
  
  

 
  
