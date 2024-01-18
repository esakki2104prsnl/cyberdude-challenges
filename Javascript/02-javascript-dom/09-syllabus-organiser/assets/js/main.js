import JustValidate from 'just-validate';

const localStorageKey = "syllabus-data"


const formEl = document.querySelector("form")
console.log(formEl);

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



validate.onSuccess(() => {
    const formData = new FormData(formEl)
    const formObj = Object.fromEntries(formData.entries())
    const syllabusData = []

    console.log(formObj);
    // Get existing localStorage value
    const existingSyllabusData = localStorage.getItem(localStorageKey);

    // String into JS value
    const existingSyllabusArray = JSON.parse(existingSyllabusData);

    if (existingSyllabusArray) {
        existingSyllabusArray.push(formObj);
        localStorage.setItem(
            localStorageKey,
            JSON.stringify(existingSyllabusArray)
        );
    } else {
        syllabusData.push(formObj);
        localStorage.setItem(localStorageKey, JSON.stringify(syllabusData));
    }

})
// console.log(formObj.course - title);

// })



//LocalStorage
// localStorage.getItem("syllabus-data")

// console.log(formData, formObj);