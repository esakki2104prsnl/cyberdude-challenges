const fs = require('fs')
const touristPlace = require("./data/tamilnadu.json")

fs.mkdir("TamilNadu", (err) => { console.log(err); })


touristPlace.forEach(({ area, favorite_food, favorite_place }) => {
    return (
        fs.writeFile(`TamilNadu/${area}.txt`,
            `In ${area}, 
    the 😋favorite food is ${favorite_food}, 
        and the 🌄favorite place is ${favorite_place}.`,
            (err) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log("File creted sucessfully");
            })
    )
});


