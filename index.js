function destructivelyAppendKitten(name) {
    kittens.push(name)
    // not neccessary? return kittens
}

function destructivelyPrependKitten(name) {
    kittens.unshift(name)
    // not neccessary? return kittens
}

function destructivelyRemoveLastKitten() {
    kittens.pop()
    // not neccessary? return kittens
}

function destructivelyRemoveFirstKitten() {
    kittens.shift()
    // not neccessary? return kittens
}

function appendKitten(name) {
    var newKittens = [...kittens, name]
    // not neccessary? return newKittens
}

function prependKitten(name) {
    var newKittens = [name, ...kittens]
    // not neccessary? return newKittens
}

function removeLastKitten() {
    var newKittens = kittens.slice(0, kittens.length - 1)
    // not neccessary? return newKittens
}

function removeFirstKitten() {
    var newKittens = kittens.slice(1)
    // not neccessary? return newKittens
}














/*const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(name) {
  var newArray = [...kittens, name];
  return newArray
}

function prependKitten(name) {
  var newArray = [name, ...kittens];
  return newArray
}

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray
}

function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray
}
*/
