import JustValidate from "just-validate";

const appointmentFormEl = document.getElementById("appointmentForm");

console.log(appointmentFormEl);
const validateForm = new JustValidate(appointmentFormEl);

validateForm.addField("#fullName",
    [
        { rule: "required" },
        { rule: "minLength", value: 3 },
        { rule: "maxLength", value: 15 },
    ],
    {
        errorLabelCssClass: ["error-label"],
    },
);

validateForm.addField('#email', [
    {
        rule: 'required',
    },
    {
        rule: 'email',
    },
], {
    errorLabelCssClass: ["error-label"],
},
);

validateForm.addField('#mobile-no', [
    {
        rule: 'required',
    },
    {
        rule: 'number',
    },
    {
        rule: "maxNumber",
        value: 10
    },
], {
    errorLabelCssClass: ["error-label"],
},
);

validateForm.addField('#person', [
    {
        rule: 'required',
    },
], {
    errorLabelCssClass: ["error-label"],
},
)

validateForm.addField("#time", [
    {
        rule: 'required',
    },
], {
    errorLabelCssClass: ["error-label"],
},
)

validateForm.addField("#date", [
    {
        rule: 'required',
    },
], {
    errorLabelCssClass: ["error-label"],
},
)




// Contact Code JS CDN
const phoneInputField = document.querySelector("#mobile-no");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
