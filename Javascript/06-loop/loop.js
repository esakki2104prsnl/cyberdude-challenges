// Create different ways of defining functions and explain it in detail with examples.

// Array of objects - looping
const premam = [
  {
    name: 'George David',
    realName: "Nivin Pauly",
    age: 39, city: 'Ernakulam, Kerala',
    role: "actor"
  },
  {
    name: 'Koya',
    realName: "Krishna Shankar",
    age: 36,
    city: 'Kochi, Kerala',
    role: "actor/producer"
  },
  {
    name: 'Shambu',
    realName: "Nivin Pauly",
    age: 38,
    city: ' Mumbai',
    role: "actor"
  }
];

// Using for loop
console.log('Using for loop:');
// for(initalize; logics/condition; increment)
for (const i = 0; i < premam.length; i++) {
  console.table(`My Permam role name${premam[i].name}, My Real name is ${premam[i].realName} `);
}

// Using while loop
console.log('\nUsing while loop:');
const index = 0;
while (index < premam.length) {
  console.log(`${premam[index].name} is ${premam[index].age} years old and lives in ${premam[index].city}`);
  index++;
}

// Using for...in loops
console.log('\nUsing for...in loop:');
for (const key in premam) {
  console.log(premam[key]);
}


// Using for...of loop
console.log('\nUsing for...of loop:');
for (const person of premam) {
  console.log(`${person.name} is ${person.age} years old and lives in ${person.city}`);
}

// Using forEach() method
console.log('\nUsing forEach() method:');
premam.forEach(person => {
  console.log(`${person.name} is ${person.age} years old and lives in ${person.city}`);
});

// Using map() method (just for demonstration, not modifying the array)
console.log('\nUsing map() method:');
premam.map((person) => {
  console.log(`${person.name} is ${person.age} years old and lives in ${person.city} working as an ${person.role}`);
}); 
// Filtered
const startFiltered = premam.filter(value => value.city.startsWith("K"));
const endFiltered = premam.filter(value => value.city.endsWith("a"));
console.log(startFiltered);
console.log(endFiltered);