import JustValidate from 'just-validate';


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


// .addField("course-length"), [
// {
//     rule: "required"
// }
// ]