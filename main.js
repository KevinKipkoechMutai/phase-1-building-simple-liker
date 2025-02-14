// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector('#modal').className = "hidden";
let likeBtns = document.querySelectorAll(".like-glyph");
likeBtns.forEach(likeBtn => {
  likeBtn.addEventListener('click', e => {
    mimicServerCall()
    .then(() => {
      if (likeBtn.innerText === EMPTY_HEART) {
        likeBtn.innerText = FULL_HEART;
        likeBtn.className = "activated-heart";
      }
      else {
        likeBtn.innerText = EMPTY_HEART;
        likeBtn.className = "";
      }
    })
    .catch(error => {
      modal.className = "";
      setTimeout(() => modal.className = 'hidden', 3000);
    })
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
