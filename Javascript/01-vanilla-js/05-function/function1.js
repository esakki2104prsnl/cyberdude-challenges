//Array of Object to hold internStudents, sources, citaitons and years
const internStudents = [
    {
        internName: "Esakki M",
        designation: "Full Satck Engineer",
        year: "2002"
    },
    {
        internName: "Vasanth.S",
        designation: "Full Satck Engineer",
        year: "1999"
    },
    {
        internName: "Surya K",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Riyaz",
        designation: "Full Satck Engineer",

    },
    {
        internName: "Hema Venkat",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Yogha Raj Dhayalan N",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Mohammed Mushir",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Bearcin Sweety",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Dinesh",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Jeya Roshini",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Sweetha Ramesh",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Shajid Shafee",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Muthu Ahalya",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Vijayvedhasekaran",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Sudharsan",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Khaja Sharif",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Gayathiri H G",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Kishore Kumar K",
        designation: "Full Satck Engineer",
    },
    {
        internName: "Muthukumari",
        designation: "Full Satck Engineer",
    }
];

console.log(Math.random());
console.log((internStudents.length));
console.log(Math.floor(Math.random()));
console.log(Math.floor(Math.random() * (internStudents.length)));
const randomNumber = Math.floor(Math.random() * (internStudents.length));
console.log(internStudents[randomNumber]);

//Function to randomly select a internName value and return a random name object from the internStudents array
function getRandomName() {
    const randomNumber = Math.floor(Math.random() * (internStudents.length));
    const randomName = internStudents[randomNumber];
    return randomName;
}

function printName() {
    const internStudents = getRandomName();
    const quoteString = `
    Students Name: "${internStudents.internName}" 
        Designation:${internStudents.designation}
        Year:  ${internStudents.year} 
        ` ;

    console.log(quoteString);
}
printName();