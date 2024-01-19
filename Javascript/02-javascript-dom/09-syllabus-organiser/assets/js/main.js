import JustValidate from 'just-validate';

const localStorageKey = "syllabus-data"


const formEl = document.querySelector("form")
// console.log(formEl);

const validate = new JustValidate(formEl)

validate.addField("#course-title", [
    {
        rule: 'required',
    },
    {
        rule: 'minLength',
        value: 2,
    },
    {
        rule: 'maxLength',
        value: 15,
    },
],
    {
        errorFieldCssClass: ['invalid'],
    })

validate.addField("#course-length", [
    {
        rule: 'required',
    },
    {
        rule: "minLength",
        value: 4,
    },
    {
        rule: "maxLength",
        value: 5,
    }
],
    {
        errorFieldCssClass: ['invalid'],
    })

validate.addField("#youtube-link", [
    {
        rule: 'required',
    },
],
    {
        errorFieldCssClass: ['invalid'],
    })


//*****DROPDOWN MENU*******//
validate.addField("#content", [
    {
        rule: 'required',
    },
],
    {
        errorFieldCssClass: ['invalid'],
    })

validate.addField("#author", [
    {
        rule: 'required',
    },
],
    {
        errorFieldCssClass: ['invalid'],
    })

// ***************Form Data Collection to LocalStorage****************//
// console.log(formEl);


// const btnEl = document.querySelector("button")
// btnEl.addEventListener("submit", () => {

// function tableUI(event) {
//     // console.log(event.target.parentNode);
//     const tableEl = document.querySelector("table")
//     if (tableEl === "object") {
//         tableEl.className = "table-auto text-center w-full border-collapse"
//     } else {
//         tableEl.className = "hidden"
//     }
//     console.log(typeof tableEl);
// }
// tableUI()

validate.onSuccess(() => {
    const formData = new FormData(formEl)
    const formObj = Object.fromEntries(formData.entries())
    const syllabusData = []


    // console.log(formObj);
    // Get existing localStorage value
    const existingSyllabusData = localStorage.getItem(localStorageKey);

    // String into JS value
    const existingSyllabusArray = JSON.parse(existingSyllabusData);

    if (existingSyllabusArray) {
        existingSyllabusArray.push(formObj);
        localStorage.setItem(localStorageKey, JSON.stringify(existingSyllabusArray));
    } else {
        syllabusData.push(formObj);
        localStorage.setItem(localStorageKey, JSON.stringify(syllabusData));
    }

    formEl.reset()

    existingSyllabusArray.map((syllabusDatas, index) => {
        const tableEl = document.querySelector("table>tbody#tbody")
        console.log(tableEl);

        // console.log(syllabusDatas.author);

        // *********Table Created using DOM*******//
        const trEL = document.createElement("tr")
        trEL.className = "td-style"

        const tdELSN = document.createElement("td")
        tdELSN.classList = "border border-black"
        tdELSN.textContent = `${index + 1}`


        const tdELCT = document.createElement("td")
        tdELCT.classList = "border border-black"
        tdELCT.innerText = `${syllabusDatas.title}`

        const tdELCL = document.createElement("td")
        tdELCL.classList = "border border-black"
        tdELCL.textContent = `${syllabusDatas.length}`

        const tdELTC = document.createElement("td")
        tdELTC.classList = "border border-black"
        tdELTC.textContent = `${syllabusDatas.type}`

        const tdELAU = document.createElement("td")
        tdELAU.classList = "border border-black"
        tdELAU.textContent = `${syllabusDatas.author}`

        // const urlEl = document.getElementById("url");
        const tdELYT = document.createElement("td")
        tdELYT.classList = "border border-black"
        tdELYT.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-NZbPVCxqrllQneLoxwYV2GwjJ-wCOFWUUjNHaaVlw&s">`
        // const urlID = urlEl.value.split("=")[1];
        // tdELYT.innerHTML = `<img src="https://i.ytimg.com/vi/${urlID}/maxresdefault.jpg">`

        const tdELAC = document.createElement("td")
        tdELAC.classList = "border border-black"
        tdELAC.innerHTML = `
        <div class="flex justify-center space-x-4 text-gray-700">
<a href="#"
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    class="hover:text-yellow-600"
  >
    <path
      fill="currentColor"
      d="M14 22v-3.075l5.525-5.5q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55q0 .275-.1.563t-.325.512l-5.5 5.5zm7.5-6.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zM6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v3h-2V9h-5V4H6v16h6v2zm13.025-5.025l-.475-.45l.925.925z"
    />
  </svg>
</a>
<a href="#">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    class="hover:text-red-600"
  >
    <path
      fill="currentColor"
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
    />
  </svg>
</a>
</div>`


        trEL.append(tdELSN, tdELCT, tdELCL, tdELTC, tdELAU, tdELYT, tdELAC)
        tableEl.append(trEL)
        // console.log(trEL);

    })

})

function getAllSyllabusData() {
    const syllabusData = localStorage.getItem(localStorageKey)
    console.log(syllabusData);
}
getAllSyllabusData()



// console.log(formObj.course - title);



// })



//LocalStorage
// localStorage.getItem("syllabus-data")

// console.log(formData, formObj);