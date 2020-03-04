const students = [
    {id: 11, name: 'Omar Sani'},
    {id: 21, name: 'Maaannaaa'},
    {id: 31, name: 'Moyuirii'},
    {id: 41, name: 'Deep jol'}
];

const studentNames = [];

for(let i=0; i<students.length; i++){
    const names = students[i].name;
    studentNames.push(names);
}

console.log(studentNames);


const mapNames = students.map(s => s.name);

console.log(mapNames);

const mapIds = students.map(s => s.id);

console.log(mapIds);


const filteredIds = students.filter(s => s.id>25);

console.log(filteredIds);

const findOne = students.find(s => s.id>25);

console.log(findOne);

