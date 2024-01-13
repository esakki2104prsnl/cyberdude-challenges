const adviceEl = document.querySelector("main > div > h5")
const refreshBtnEl = document.querySelector("main > div > a");
// refreshBtnEl.style.display = "none"

console.log(adviceEl);


const adviceUrl = "https://api.adviceslip.com/advice";
console.log(adviceUrl);

refreshBtnEl.addEventListener("click", () => {
    window.location.href = "./index.html";
});

async function getAdviceData() {
    try {
        const fetchResponse = await fetch(adviceUrl)
        const jsonData = await fetchResponse.json()
        return jsonData
    } catch (error) {
        console.error("Network went wrong", error);
    }
}


const adviceData = await getAdviceData()

// refreshBtnEl.className = "btn"
adviceEl.textContent = adviceData.slip.advice
console.log(adviceData.slip.advice);


refreshBtnEl.style.display = "inline-flex"