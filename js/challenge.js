//submit form
const form = document.querySelector("#comment-form");
const btn = document.querySelector("#submit");
const comments = document.querySelector(".comments");
const commentInput = document.querySelector("#comment-input");

function submitComment (event) {
    comments.textContent = commentInput.value;
    event.preventDefault();
}

form.addEventListener("submit", submitComment);

//counter
const increment = document.querySelector("#plus");
const decrement = document.querySelector("#minus");
const counter = document.querySelector("#counter");
let count = 0;
counter.innerHTML = count;
//increment counter
const handleIncrement = () => {
    count++;
    counter.innerHTML = count;
}

increment.addEventListener("click", handleIncrement);

//decrement counter 
const handleDecrement = () => {
    count--;
    counter.innerHTML = count;
}

decrement.addEventListener("click", handleDecrement);

// like button
const likes = document.querySelector(".likes");

const handleLikes = function(e) {
    likes.innerHTML = `${counter} has been liked 1 time`;
}

likes.addEventListener("click", handleLikes);

//pause button




