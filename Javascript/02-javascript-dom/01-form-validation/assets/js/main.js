import JustValidate from "just-validate";

const appointmentFormEl = document.getElementById("appointmentForm");
const sectionEl = document.getElementById("section");
const responseEl = document.getElementById("response");


const formData = new FormData(appointmentFormEl);
const formObj = Object.fromEntries(formData.entries());
const newAppoinmentData = [];

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
//     var date = formObj.date
//     var d = new Date();
//     var x = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
//     console.log(d.getDate());
//     var checkDate = date.substr(8, 2);
//     var equalDate = d.getDate();
//     console.log(checkDate, equalDate);
//     var checkMonth = date.substr(5, 2);
//     var equalMonth = d.getMonth();
//     console.log(checkMonth, equalMonth);
//     var checkYear = date.substr(0, 4);
//     var equalYear = d.getFullYear();
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
    responseEl.style.display = "block";
    const response = (` Full Name : ${formObj.name},
  Appoinment to : ${formObj.person}
  Appointment Date and Time : ${formObj.date} & ${formObj.time}
  `);
    responseEl.innerText = response;

    appointmentFormEl.reset();
});



// Contact Code JS CDN
const phoneInputField = document.querySelector("#mobile-no");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
