import data from "../../data/index.json"

// loop JSON data file 
data.forEach((data) => {
    console.log(data);

    let ulEl = document.querySelector("#ulList")
    const liEl = document.createElement("li")
    const imgEl = document.createElement("img")
    const divEl = document.createElement("div")
    // Create Li
    liEl.className = "li-card"

    // Image
    imgEl.src = data.thumbnail
    imgEl.className = "w-40 h-30"
    liEl.append(imgEl, divEl)


    // div
    divEl.className = "div-class"
    divEl.innerText = data.title

    const spanEl1 = document.createElement("span")
    spanEl1.className = "span1"
    spanEl1.innerText = data.desc

    const spanEl2 = document.createElement("span")
    spanEl2.className = "span2"
    spanEl2.innerText = data.discountPercentage + "%"

    const spanEl3 = document.createElement("span")
    spanEl3.className = "span3"
    spanEl3.innerText = "₹" + data.discountedPrice

    divEl.append(spanEl1, spanEl2, spanEl3)

    ulEl.append(liEl)
})
