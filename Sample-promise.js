Promise.resolve()
  .then(() => delay(400))
  .then(() => log1())
  .then(() => delay(500))
  .then(() => log2())
  .then(() => delay(800))
  .then(() => log3());

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

function log1() {
  console.log("Message 1");
}

function log2() {
  console.log("Message 2");
}

function log3() {
  console.log("Message 3");
}
