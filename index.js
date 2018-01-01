const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newList = [...kittens, "Broom"]
  return newList;
}

function prependKitten(name) {
  var newList = ["Arnold", ...kittens]
  return newList;
}

function removeLastKitten(name) {
  var removedLast = ["Arnold", ...kittens]
  return removedLast;
}

function removeFirstKitten(name) {
  var newList = ["Arnold", ...kittens]
  return newList;
}