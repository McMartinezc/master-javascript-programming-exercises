function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj;
}

const objeto = {};
console.log(addProperty(objeto, 'myProperty'));