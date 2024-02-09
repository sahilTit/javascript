function setUserName(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUserName.call(this, username);
  (this.email = email), (this.password = password);
}
const snap = new createUser("sahil", "sahil@gmail.com", "1234");
console.log(snap);
