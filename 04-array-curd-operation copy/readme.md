# Array CRUD Operation (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #3: Create a Primitive Array & Referance Array using CRUD Operation all possible conditions

// 24/11/2023 - Create a primitive & reference array

```
// Primitive ARRAY

let material = ["iron", "cooper", "silver", "gold"]
console.log(material);

let push = material.push("", "Brass")
console.log(push);

let pop = material.pop()
console.log(pop);

let includes = material.includes("gold")
console.log("Gold is avaliable in this material array " + includes);
```

```
// Referance ARRAY

const homeVegs = [
    { id: 1, vegName: "Beetroot", quanity: "250g" },
    { id: 2, vegName: "carrot", quanity: "1kg" },
    { id: 3, vegName: "brinjal", quanity: "500g" },
    { id: 4, vegName: "onion", quanity: "500g" },
    { id: 5, vegName: "green chilli", quanity: "500g" },
]

homeVegs.push({ id: 8, vegName: "Pumkin" })
console.log(homeVegs);

console.log(homeVegs.find(product => {
    return product.quanity === "250g"
}))

```

### Live link ->

Deploy it and put the link here.

## References:

[![Object CRUD Operation review](https://i.ytimg.com/vi/-_8fbcy-TKY/maxresdefault.jpg)](http://www.youtube.com/watch?v=4SAETZ1ojbQ "Object CRUD Operation review Cyberdude youtube Live")
