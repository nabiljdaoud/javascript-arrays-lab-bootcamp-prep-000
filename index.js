const app = "I don't do much.";

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return;
}

function appendKitten(name) {
  return [kittens, name];
}

function prependKitten(name) {
  
}