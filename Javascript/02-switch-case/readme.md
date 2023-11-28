# Switch Case (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #1: Create a switch case with all possible conditions

```
// Switch Case 

const userName = prompt("Enter your name")
const times = new Date().getHours();

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

```

### Live link ->

Deploy it and put the link update soon

## References:


[![If else code review](https://i.ytimg.com/vi/-_8fbcy-TKY/maxresdefault.jpg)](http://www.youtube.com/watch?v=-_8fbcy-TKY "If else code review Cyberdude youtube Live")


