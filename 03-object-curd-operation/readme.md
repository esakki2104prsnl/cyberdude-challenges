# Object CRUD Operation (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #2: Create a Object using CRUD Operation all possible conditions

```
// 23/11/2023 - Create a object with all datatype values and try to manipulate it.

const fxecCollege = {
    collegeName: "Francis Xavier Engineering College",
    location: "Tirunelveli",
    noOfDepartmentsInUG: 8,
    noOfDepartmentsInPG: 6,
    pincode: 627003,
    isAutonomous: true,
    isAnnaUniversity: false,
    isIsoCertified: true,
    isNBACertified: true,
    NBACertified: {
        NBACertifiedDepartments: ["CSE", "MECH", "EEE", "ECE"]
    },
    department: {
        MECH: "Mechanical Engineering",
        CSE: "Computer Science Engineering",
        EEE: "Electrical and Electronics Engineering",
        ECE: "Electronics and Communication Engineering"
    },
    totalStudents() {
        const totalStudentsInCollege = (this.noOfDepartmentsInUG * 60) + (this.noOfDepartmentsInPG * 60)
        console.log(`No of studnets in FXEC: ${totalStudentsInCollege}`);
    }
}


const fxecSchool = { ...fxecCollege, schoolName: " Francis Xavier School CBSE" }
console.log(fxecSchool);

const lengthFxecCollege = Object.keys(fxecCollege).length
const lengthFxecSchool = Object.keys(fxecSchool).length
console.log(lengthFxecCollege);
console.log(lengthFxecSchool);


// console.log("The above fxecCollege is an" + " " + typeof fxecCollege);


// CRUD - Operation
// Create
fxecCollege.block = {}
console.log(fxecCollege.block);

// Read
fxecCollege.totalStudents()
console.log(fxecCollege["department"]);

// Update
fxecCollege["isAutonomous"] = false
console.log(`Here we are checking an object using square bracket notation ${fxecCollege["isAutonomous"]}`);
// fxecCollege.isAutonomous = true
// console.log(`Here we are checking an object using dot notation ${fxecCollege.isAutonomous}`);

// Delete
delete fxecCollege.department;
console.log(fxecCollege.department);
console.log(fxecCollege);
```

### Live link ->

Deploy it and put the link here.

## References:

[![Object CRUD Operation review](https://i.ytimg.com/vi/-_8fbcy-TKY/maxresdefault.jpg)](http://www.youtube.com/watch?v=4SAETZ1ojbQ "Object CRUD Operation review Cyberdude youtube Live")
