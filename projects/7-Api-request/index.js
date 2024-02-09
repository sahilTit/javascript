const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is completed");
    // resolve()
  }, 3000);
});
promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Sahil", email: "titarmaresahil2003@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Tejas", pass: "1234" });
    } else {
      reject("Error :Somthing went wrong");
    }
  }, 1000);
});

const username = promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Accpted or Rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", pass: "1234" });
    } else {
      reject("js failed");
    }
  }, 1000);
});

async function consumePromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
try {
    const response = await promiseFive
    console.log(response)
} catch (error) {
    console.log(error)
}
}
consumePromiseFive();
