const formEl = document.querySelector("form")

console.log(5 * 60+"sec");

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const duration = document.querySelector("#course-length")
    const durationLength = parseInt(duration)

    // if (durationLength)
    console.log(typeof durationLength);
})

