function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}

async function showMessage() {
  let response = await myPromise();
  console.log(response);
}
showMessage();

function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${data}`);
      resolve();
    }, 2000);
  });
}

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
}
getAllData();

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve(200);
    } else {
      reject("ERROR");
    }
  }, 2000);
});

async function consumePromise() {
  try {
    let response = await promiseTwo;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise();

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done Waiting");
    }, 1000);
  });
}

async function done() {
  let response = await waitOneSecond();
  console.log(response);
}
done();
const done = async () => {
  let respone = await waitOneSecond();
  console.log(respone);
};
done();
