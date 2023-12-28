import JustValidate from 'just-validate';

const userDataEl = document.getElementById("userData");
const sectionEl = document.getElementById("response")

const localStorageKey = "userDataValue";

const validate = new JustValidate(userDataEl, {
    validateBeforeSubmitting: true,
});



validate.addField("#username",
    [
        { rule: "required" },
        { rule: "email" }
    ],
    {
        errorLabelCssClass: ["error-label"],
    });


validate.addField("#about", [
    { rule: "required" },
    {
        validator: (value) => {
            return value !== undefined && (value).length > 15;
        },
        errorMessage: 'Message should be more than 15 letters.',
    },
], {
    errorLabelCssClass: ["error-label"],
})


validate.addField("#first_name",
    [
        { rule: "required" },
        { rule: "minLength", value: 3 },
        { rule: "maxLength", value: 15 },
    ], {
    errorLabelCssClass: ["error-label"],
});

validate.addField("#last_name",
    [
        { rule: "required" },
        { rule: "minLength", value: 1 },
        { rule: "maxLength", value: 15 },
    ],
    {
        errorLabelCssClass: ["error-label"],
    }
)

validate.addField('#email', [
    {
        rule: 'required',
    },
    {
        rule: 'email',
    },
], {
    errorLabelCssClass: ["error-label"],
})

validate.addField('#postal-code', [
    {
        rule: 'required',
    },
    {
        rule: "number"
    },
    {
        rule: 'minLength',
        value: 6,
    },
    {
        rule: 'maxLength',
        value: 6,
    },
], {
    errorLabelCssClass: ["error-label"],
});




validate.onSuccess(() => {
    const formData = new FormData(userDataEl);
    const formObj = Object.fromEntries(formData.entries());

    // creating Array
    const newDataArray = []

    // Get existing localStorage value
    const existingUserData = localStorage.getItem(localStorageKey);

    //     // String into JS value
    const exisitngDataArray = JSON.parse(existingUserData);

    if (exisitngDataArray) {
        exisitngDataArray.push(formObj);
        localStorage.setItem(
            localStorageKey,
            JSON.stringify(exisitngDataArray)
        );
    } else {
        newDataArray.push(formObj);
        localStorage.setItem(localStorageKey, JSON.stringify(newDataArray));
    }

    // Tomorrow start from Here 
    const LSValue = localStorage.getItem("userDataValue")
    console.log(LSValue[0]);

    const fianlValue = localStorage.JSON.parse(LSValue)
    console.log(fianlValue);
    // const divEl = document.createElement("div")
    // const oldData = exisitngDataArray.forEach(element => {
    //     console.log(element);
    // });
    // const updateDataData = [...oldData]

    // console.log(updateDataData);

    // sectionEl.style.display = "block";


    // const updateData = [...oldData]
    // divEl.append(oldData)
    // console.log(oldData);

    userDataEl.reset()
});


function updateUI() {

}

