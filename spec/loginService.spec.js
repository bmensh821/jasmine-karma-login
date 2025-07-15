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
        console.log("🧪 New test starts");
        console.log("Setting up test data...");
        resetUsers(); // reset mock DB before every test
    });

    afterEach(function () {
        console.log("Cleaning up after test...");
        console.log("✅ Finished test.");
        setUsers([]); // clear users after every test (optional)
    });

    it("should return true for valid login", function () {
        const username = "admin";
        const password = "admin123";
        const result = login(username, password);

        console.log(`Tested login('${username}', '${password}') → ${result}`); // atl+26 get →
        expect(login("admin", "admin123")).toBeTrue();
    });

    it("should allow dynamically added users", function () {
        const username = "bob";
        const password = "letmein";

        setUsers([{ username, password }])
        const result = login(username, password);

        console.log(`Tested login('${username}', '${password}') → ${result}`);
        expect(login("bob", "letmein")).toBeTrue();
    });

    it("should return false for unknown user", function () {

        const username = "unknown";
        const password = "whatever";

        resetUsers(); // Restore default users: 'admin', 'ben'
        const result = login(username, password);

        console.log(`Tested login('${username}', '${password}') → ${result}`);
        expect(result).toBeFalse();

    });

    it("should return false for SQL injection", function () {
        const username = "' OR 1=1 --";
        const password = "admin123";
        const result = login(username, password);

        console.log(`Tested login('${username}', '${password}') → ${result}`);
        // Expect the login to fail due to SQL injection attempt
        expect(result).toBeFalse();
    });
});

