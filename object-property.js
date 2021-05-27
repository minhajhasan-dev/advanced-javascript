const students = [
  { id: 21, name: "Omar Sunny" },
  { id: 31, name: "Mannaaaa" },
  { id: 41, name: "Moyourie" },
  { id: 71, name: "Deepjol" },
];

// Old method 
const result = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    // return element;
    result.push(element.name);
}
// console.log(result);

// new method 

const names = students.map(s=>s.name);
const ids = students.map(i=>i.id);
const bigger = students.filter(s=>s.id>40);
console.log(bigger);
