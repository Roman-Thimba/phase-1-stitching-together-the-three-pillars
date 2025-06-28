/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
// Find the hearts on the page
const articleHearts = document.querySelectorAll(".like-glyph");
// Simulates a server call
function mimicServerCall(url="http://mimicServer.example.com") {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
// Add event listeners to each heart
for (const heart of articleHearts) {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.innerText === "♡") {
          heart.innerText = "♥";
          heart.classList.add("activated-heart");
        } else {
          heart.innerText = "♡";
          heart.classList.remove("activated-heart");
        }
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  });
}
