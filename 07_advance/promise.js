// promise

new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log("this is all about promise");
    resolve();
  }, 2000);
}).then(() => {
  //   console.log("promise is resolved");
});

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Another way of creating promise");
    resolve();
    reject();
  }, 3000);
});
promiseOne.then(() => {
  //   console.log("second way of creating promise");
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) {
      //   console.log("error");
    }
    reject();
  }, 2000);
});
promiseTwo
  .then(() => {
    // console.log("succesfull");
  })
  .catch(() => {
    // console.log("something went wrong");
  });

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("passing arguments");
    resolve({ userName: "zaryab khan", email: "zaryab6788@gmail.com" });
    reject("ERROR");
  }, 4000);
});

promiseThree
  .then((res) => {
    return res.userName;
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    // console.log(error);
  });

//   Create a Promise that resolves after 1 second with the value:
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 1000);
}).then((result) => {
  //   console.log(result);
});

// Create a Promise that:
// Resolves if age >= 18
// Rejects otherwise

const agePromise = new Promise((resolve, reject) => {
  let age = 10;
  if (age >= 18) {
    setTimeout(() => {
      resolve("Access granted");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Access denied");
    }, 2000);
  }
});
agePromise
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => {
    // console.log(err);
  });

const numPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});
numPromise
  .then((num) => num * 3)
  .then((res) => res + 4)
  .then((final) => console.log(final));

//    promise.all()
// let p1 = new Promise((resolve) => {
//   setTimeout(() => resolve("A"), 1000);
// });
// let p2 = new Promise((resolve) => {
//   setTimeout(() => resolve("B"), 1000);
// });
// let p3 = new Promise((resolve) => {
//   setTimeout(() => resolve("C"), 1000);
// });
// Promise.all([p1, p2, p3])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// promise.race()
// let p1 = new Promise((resolve) => {
//   setTimeout(() => resolve("A"), 3000);
// });
// let p2 = new Promise((resolve) => {
//   setTimeout(() => resolve("B"), 1000);
// });
// let p3 = new Promise((resolve) => {
//   setTimeout(() => resolve("C"), 2000);
// });
// Promise.race([p1,p2,p3]).then((res)=>console.log(res))

// Promise.allSettled()
let p1 = new Promise((resolve) => {
  resolve("A");
});
let p2 = new Promise((resolve) => {
  resolve("B");
});
let p3 = new Promise((resolve, reject) => {
  //   resolve("C")
  reject("error");
});
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
