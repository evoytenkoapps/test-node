const promiseArg = (
  resolve: (value: any | PromiseLike<any>) => void,
  reject: (reason?: any) => void
) => {
  console.log("start");
  resolve(undefined);
};

const promise = new Promise(promiseArg);
console.log("before then");
promise.then((data) => console.log("then"));
console.log("after then");
