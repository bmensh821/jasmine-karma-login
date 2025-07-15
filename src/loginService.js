let users = [];

function setUsers(newUsers) {
  users = [...newUsers];
}

function resetUsers() {
  users = [
    { username: "admin", password: "admin123" },
    { username: "ben", password: "qwerty" },
  ];
}

function isValidInput(str) {
  const pattern = /('|--|;|=|drop|select|union)/i;
  return typeof str === "string" && str.trim() !== "" && !pattern.test(str);
}

function login(username, password) {
  if (!isValidInput(username) || !isValidInput(password)) {
    return false;
  }

  return users.some(
    (user) => user.username === username && user.password === password
  );
}

// ommented out module.export just let the `login()` function be global
// Make login available to the tests
//if (typeof module !== "undefined") {
//  module.exports = { login };
//}
