// Since Karma loads src/loginService.js in the browser,
// the `login` function is already available globally.
// Just use it directly — no import needed.

describe("LoginService", function () {
  beforeAll(function () {
    console.log("Starting LoginService test suite...");
  });

  afterAll(function () {
    console.log("Finished LoginService test suite.");
  });

  beforeEach(function () {
    console.log("Setting up test data...");
    resetUsers(); // reset mock DB before every test
  });

  afterEach(function () {
    console.log("Cleaning up after test...");
    setUsers([]); // clear users after every test (optional)
  });

  it("should return true for valid login", function () {
    expect(login("admin", "admin123")).toBeTrue();
  });

  it("should allow dynamically added users", function () {
    setUsers([{ username: "bob", password: "letmein" }]);
    expect(login("bob", "letmein")).toBeTrue();
  });

  it("should return false for unknown user", function () {
    expect(login("unknown", "whatever")).toBeFalse();
  });

  it("should return false for SQL injection", function () {
    expect(login("' OR 1=1 --", "admin123")).toBeFalse();
  });
});

