function removeProperty(obj, key) {
  // your code here
  delete obj[key];
}
const obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name')
console.log(obj);