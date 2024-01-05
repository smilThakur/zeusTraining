const formBtn = document.getElementById("btn")
const username = document.getElementById("name")
const male = document.getElementById("male")
const female = document.getElementById("female")
const comments = document.getElementById("comments")

formBtn.addEventListener("click", (event) => {
    event.preventDefault()
    if (username.value === "") {
        alert("fill all the details")
        username.focus()
    }
    else if (comments.value === "") {
        alert("fill all the details")
        comments.focus()
    }
    else if (male.checked === false && female.checked === false) {
        alert("fille all the details")
    }
    else {
        alert("thanks for your words")
    }

})

