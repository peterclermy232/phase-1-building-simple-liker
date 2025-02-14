// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likesHeart = document.querySelectorAll(".like-glyph");

function likeFunc(e){
  const heart = e.target;
  mimicServerCall("bogusUrl")
     .then(function(){
       if(heart.innerHTML === EMPTY_HEART){
         heart.innerHTML = FULL_HEART;
         heart.className = "activated-heart"
       } else{
         heart.innerHTML = EMPTY_HEART;
         heart.className = "";
       }
     })
       .catch(function(err){
         const modal = document.querySelector("modal");
         modal.className = "";
         modal.innerText = err;
         setTimeout(() => modal.className = "hidden", 3000)
       })
}

for (const glyph of likeFunc){
  
}


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
