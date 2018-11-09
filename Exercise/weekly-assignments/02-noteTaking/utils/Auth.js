const USERS = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
  ];

module.exports = function myAuthFunc (username, password) {
    return USERS.some(user => {
      return user.username == username && user.password == password;
    });
  };
