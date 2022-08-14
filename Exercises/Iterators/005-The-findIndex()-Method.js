const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


//finds 'elephant' in this array
const foundAnimal = (animals.findIndex(animal => {
  return animal === 'elephant';
}))

//finds first animal that starts with S
const startsWithS = (animals.findIndex(animal => {
  return animal[0] === 's';
}))

//logs the index of the first element of animals that starts with S
console.log(startsWithS);