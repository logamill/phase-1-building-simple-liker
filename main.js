// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let like = document.querySelectorAll(".like-glyph");
like.forEach(like => {
  like.addEventListener('click', likeFunction)
})

function likeFunction(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function() {
      if( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
    }
})
.catch(function(error) {
  const modal = document.getElementById('modal')
  modal.className = '';
  modal.innerText = error;
})
}


// for(const heart of like) {
//   like.addEventListener('click', likeFunction);
// }
// }

//   }
//   .catch(function(error) {
//     const modal = document.getElementById('modal')
//     modal.className = '';
//     modal.innerText = error
//   })
// )});




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
