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

    userDataEl.reset()
});



// Delete Function

function deleteData(userData) {
    const confirmation = confirm(
        `Do you want to delete '${userData["firstName"]}' record?`
    );

    if (confirmation) {
        const existingUserData = localStorage.getItem(localStorageKey);

        const userDataObj = JSON.parse(existingUserData);

        // const otherRecords = courierDataObj.filter(
        //   (courierReq) => courierReq.id != courierRequest["id"]
        // );

        // Push it to localstorage again, this time, i'm deleting that record (courierRequestId)
        localStorage.setItem(localStorageKey, JSON.stringify(userDataObj));

        deleteData();
    }
}


userDataEl.addEventListener("submit", () => {

    const fetchData = localStorage.getItem(localStorageKey)
    const fechedDataArr = JSON.parse(fetchData)
    // console.log(fechedDataFromLS);

    const tableEl = document.querySelector("#dataTable");
    console.log(tableEl);
    const newFinalValue = [];

    tableEl.innerHTML = ""


    fechedDataArr.map((value) => {
        const trEl = document.createElement("tr")
        const tdEl1 = document.createElement("td")
        const tdEl2 = document.createElement("td")
        const tdEl3 = document.createElement("td")
        const tdEl4 = document.createElement("td")
        // const divEl = document.createElement("div")


        tdEl1.textContent = value.username
        tdEl1.classList.add("table-data")

        const fullName = value.firstName + " " + value.lastName
        tdEl2.textContent = fullName
        tdEl2.classList.add("table-data")

        const fullAddress = value.streetAddress + ", " + value.city + ", " + value.postalCode
        tdEl3.textContent = fullAddress
        tdEl3.classList.add("table-data")


        tdEl4.innerHTML = `<div class="m-1 flex items-center justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          id="delete"
        >
          <path
            d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"
          ></path>
        </svg>
        <p class="text-sm">Delete</p>
        
      </div>`

        // tdEl4.textContent = ""
        tdEl4.classList.add("table-data-delete")
        tdEl4.addEventListener("click", (event) => {
            deleteData(value)
        })



        trEl.append(tdEl1, tdEl2, tdEl3, tdEl4)
        newFinalValue.push(trEl)
    })

    newFinalValue.forEach((el) => tableEl.append(el));
})