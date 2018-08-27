console.log("Before");
getUser(1, getUsers);

console.log("After");

function getUsers(user) {
  gitHubRepositories(user.gitHUBusername, displayRepos);
}

function displayRepos(repo) {
  console.log(repo);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("reading a user from a database...");
    callback({ id: id, gitHUBusername: "tege1984" });
  }, 2000);
}

function gitHubRepositories(gitHUBusername, callback) {
  setTimeout(() => {
    callback(["repo1", "repo2"]);
  }, 2000);
}
