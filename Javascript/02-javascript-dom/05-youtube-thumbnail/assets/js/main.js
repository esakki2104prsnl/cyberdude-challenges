// const formEl = document.forms.urlInput
// const youtubeURLObj = Object.fromEntries(formData.entries());





// console.log(formEl, youtubeURLObj);

const formEl = document.getElementById("urlInput");
const urlEl = document.getElementById("url");
const thumbnailEl = document.getElementById("thumbnail-view");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const urlID = urlEl.value.split("=")[1];
    const imgEl = document.createElement("img");
    imgEl.src = `https://i.ytimg.com/vi/${urlID}/maxresdefault.jpg`;
    imgEl.className = "img-class"
    thumbnailEl.append(imgEl);
    formEl.reset();
});