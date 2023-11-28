// Switch Case - ()
const userName = prompt("Enter your name")
const times = new Date().getHours();
// const userName = "Sabari"

switch (true) {
    case (times > 5 && times <= 11):
        console.log("Good Morning", userName);
        break;
    case (times > 11 && times <= 16):
        console.log(`Good Afternoon ${userName}`);
        break;
    case (times > 16 && times <= 19):
        console.log(`Good Evening ${userName}`);
        break;
    default:
        console.log('Good Night' + " " + userName)
}


// switch case (ANBU Task on Mobile Buying)

// Condition Examples: Mobile buying suggestion
// If given saving amount is > 10K Buy Android Mobile
// Else If given amount is > 60k Buy iPhone Mobile
// Else if given amount is > 5 && < 10 Buy Basic Mobile
// Else Print "You can't afford mobile phone now!"

// const mobilePrice = 5000

// switch (true) {
//     case (mobilePrice >= 60000):
//         console.log("Buy iPhone Mobile");
//         break;
//     case (mobilePrice > 10000):
//         console.log("Buy Android Mobile");
//         break;
//     case (mobilePrice > 5000 && mobilePrice <= 10000):
//         console.log("Buy Basic Mobile");
//         break;
//     default:
//         console.log("You can't afford mobile phone now!");
// }
