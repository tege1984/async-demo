// console.log("Before");
// getUser(1, getUsers);

// console.log("After");

// function getUsers(user) {
//   gitHubRepositories(user.gitHUBusername, displayRepos);
// }

// function displayRepos(repo) {
//   console.log(repo);
// }

// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("reading a user from a database...");
//     callback({ id: id, gitHUBusername: "tege1984" });
//   }, 2000);
// }

// function gitHubRepositories(gitHUBusername, callback) {
//   setTimeout(() => {
//     callback(["repo1", "repo2"]);
//   }, 2000);
// }

function getUserWithPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading a user from a database...");
      resolve({ id: id, gitHUBusername: "tege1984" });
    }, 2000);
  });
}

function gitHubRepositoriesWithPromise(gitHUBusername) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading git repos...");
      resolve(["repo1", "repo2"]);
    }, 2000);
  });
}

async function displayRepo() {
  try {
    const user = await getUserWithPromise(1);
    const repo = await gitHubRepositoriesWithPromise(user.gitHUBusername);
    console.log(repo);
  } catch (err) {
    console.log(err.message);
  }
}
displayRepo();

// getUserWithPromise(1)
//   .then(user => gitHubRepositoriesWithPromise(user.gitHUBusername))
//   .then(repo => console.log(repo))
//   .catch(err => console.log(err.message));

// //creating settled promise
// p = Promise.resolve("result");
// r = Promise.reject(new Error("message"));
// p.then(res => console.log(res));
// r.catch(err => console.log(err));

// p1 = new Promise(resolve => {
//   setTimeout(() => {
//     console.log("async operation 1...");
//     resolve(1);
//   }, 2000);
// });

// p2 = new Promise(resolve => {
//   setTimeout(() => {
//     console.log("async operation 2...");
//     resolve(2);
//   }, 2000);
// });

// Promise.all([p1, p2]).then(res => console.log(res));
// Promise.race([p1, p2]).then(res => console.log(res));
