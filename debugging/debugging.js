// console.count
// console.group
// $0 in the console to display the last clicked on element when inspecting

const people = [
  { name: "dan", cool: true, neighborhood: "williamsburg" },
  { name: "jillian", cool: false, neighborhood: "crown heights" },
  { name: "emily", cool: true, neighborhood: "brooklyn heights" },
];

people.forEach((person, index) => {
  console.group(`${person.name}`)
  console.log(person.name);
  console.log(person.cool);
  console.log(person.neighborhood);
  console.groupEnd(`${person.name}`);

  if (person.name === 'jillian') {
    console.warn('heart breaker');
  }
});


function doctorize(name) {
  console.count('running doctorize')
  return `dr. ${name}`
}
