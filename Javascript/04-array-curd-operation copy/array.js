// 24/11/2023 - Create a primitive & reference array

// Primitive ARRAY

const material = ["iron", "copper", "silver", "gold"]

console.log(material);
console.log(`${material}`);

// loop
material.forEach(val => {
    console.log(val);
})

const push = material.push("", "Brass")
console.log(push);
console.log(material);

console.log(material.unshift("Steel"));
console.log(material);


console.log(material);
console.log(material.pop());

console.log(material.shift());
console.log(material);

const includes = material.includes("plastic")
console.log("Gold is avaliable in this material array " + includes);



// Referance ARRAY
const vegetables = [
    { id: 1, vegName: "Beetroot", quanity: "250g" },
    { id: 2, vegName: "carrot", quanity: "1kg" },
    { id: 3, vegName: "brinjal", quanity: "500g" },
    { id: 4, vegName: "onion", quanity: "500g" },
    { id: 5, vegName: "green chilli", quanity: "500g" },
]

vegetables.push({ id: 8, vegName: "Pumkin" })
console.log(vegetables);

console.log(vegetables.find(product => {
    return product.quanity === "500g"
}))