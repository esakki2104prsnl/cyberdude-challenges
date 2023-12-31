import JustValidate from "just-validate";

const appointmentFormEl = document.getElementById("appointmentForm");
const sectionEl = document.getElementById("section");


const localStorageKey = "appoinmentData";

const validateForm = new JustValidate(appointmentFormEl, {
    validateBeforeSubmitting: true,
});

validateForm.addField(
    "#fullName",
    [
        { rule: "required" },
        { rule: "minLength", value: 3 },
        { rule: "maxLength", value: 15 },
    ],
    {
        errorLabelCssClass: ["error-label"],
    }
);

validateForm.addField(
    "#email",
    [
        {
            rule: "required",
        },
        {
            rule: "email",
        },
    ],
    {
        errorLabelCssClass: ["error-label"],
    }
);

validateForm.addField(
    "#mobile-no",
    [
        {
            rule: "required",
        },
        {
            rule: "number",
        },
        {
            rule: "minNumber",
            value: 10,
        },
    ],
    {
        errorLabelCssClass: ["error-label"],
    }
);

validateForm.addField(
    "#person",
    [
        {
            rule: "required",
        },
    ],
    {
        errorLabelCssClass: ["error-label"],
    }
);

validateForm.addField(
    "#time",
    [
        {
            rule: "required",
        },
    ],
    {
        errorLabelCssClass: ["error-label"],
    }
);

validateForm.addField(
    "#date",
    [
        {
            rule: "required",
        },
    ],
    {
        errorLabelCssClass: ["error-label"],
    }
);

// function validateDateOfAppointment() {
//     let date = formObj.date
//     let d = new Date();
//     let x = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
//     console.log(d.getDate());
//     let checkDate = date.substr(8, 2);
//     let equalDate = d.getDate();
//     console.log(checkDate, equalDate);
//     let checkMonth = date.substr(5, 2);
//     let equalMonth = d.getMonth();
//     console.log(checkMonth, equalMonth);
//     let checkYear = date.substr(0, 4);
//     let equalYear = d.getFullYear();
//     console.log(checkYear, equalYear);

//     if (checkMonth >= equalMonth) {
//         if (checkDate < equalDate) {
//             alert("Date cannot be less than today!! ");
//             return false;
//         }
//     }
//     else if (checkMonth < equalMonth) {
//         if (checkYear < equalYear) {
//             alert("Date cannot be less than today!! ");
//             return false;
//         }
//     }
// }
// validateDateOfAppointment()


validateForm.onSuccess(() => {
    const formData = new FormData(appointmentFormEl);
    const formObj = Object.fromEntries(formData.entries());
    const newAppoinmentData = [];

    // Get existing localStorage value
    const existingAppoinmentData = localStorage.getItem(localStorageKey);

    // String into JS value
    const existingAppoinmentArray = JSON.parse(existingAppoinmentData);

    if (existingAppoinmentArray) {
        existingAppoinmentArray.push(formObj);
        localStorage.setItem(
            localStorageKey,
            JSON.stringify(existingAppoinmentArray)
        );
    } else {
        newAppoinmentData.push(formObj);
        localStorage.setItem(localStorageKey, JSON.stringify(newAppoinmentData));
    }

    alert(`Dear ${formObj.name}, 
  Your Appointment form submitted successfully✔  `);

    // Rendering UI

    sectionEl.style.display = "block";

    const createDivEl = document.createElement("div")

    createDivEl.classList.add("p-3", "max-w-xl", "mx-auto", "my-3", "text-md", "border", "font-semibold", "bg-orange-400", "text-black", "rounded-md");
    sectionEl.append(createDivEl)

    createDivEl.innerText = ` Full Name : ${formObj.name},
    Appoinment to : ${formObj.person}
    Appointment Date and Time : ${formObj.date} & ${formObj.time}
    `

    appointmentFormEl.reset();
});



// Contact Code JS CDN
const phoneInputField = document.querySelector("#mobile-no");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

