const functionWithDelay = (
  resolve: (value: any | PromiseLike<any>) => void,
  reject: (reason?: any) => void
) => {
  console.log("functionWithDelay set timeout");
  setTimeout(() => {
    console.log("functionWithDelay call resolve");
    resolve("functionWithDelay data inside resolve");
  }, 2000);
};

const functionNoDelay = (
  resolve: (value: any | PromiseLike<any>) => void,
  reject: (reason?: any) => void
) => {
  console.log("functionNoDelay call resolve");
  resolve("functionNoDelay data inside resolve");
};

const promiseWithDelay = new Promise(functionWithDelay);
const promiseNoDelay = new Promise(functionNoDelay);
const promiseResolve = Promise.resolve("promiseResolve resolve");
async function printPromiseAll() {
  const result = await Promise.all([
    promiseWithDelay,
    promiseNoDelay,
    promiseResolve,
  ]);
  console.log("All promise done", result);
}
printPromiseAll();

console.log("before then");
promiseWithDelay.then((data) => {
  console.log("promiseWithDelay then");
});

promiseNoDelay.then((data) => {
  console.log("promiseNoDelay then");
});
console.log("after then");
