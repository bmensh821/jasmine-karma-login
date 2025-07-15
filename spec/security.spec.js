describe("Security Tests for LoginService", function () {

    beforeEach(function () {
        resetUsers(); // Reset users before each test
    });

    afterEach(function () {
        console.log("Cleaning up after test...");
        console.log("✅ Finished test.");
        setUsers([]);
    });

    function itWithLog(name, fn) {
        it(name, function () {
            console.log(`🧪 Running test: ${name}`);
            fn();
        });
    }

    itWithLog("should reject SQL injection (basic)", function () {
        const username = "' OR 1=1 --";
        const password = "admin123";
        const result = login(username, password);
        console.log(`Tested login('${username}', '${password}') → ${result}`);
        expect(result).toBeFalse();
    });

    itWithLog("should reject SQL injection with uppercase keywords", function () {
        const result = login("admin", "DROP TABLE users;");
        expect(result).toBeFalse();
    });

    itWithLog("should reject SQL injection with UNION keyword", function () {
        const result = login("admin", "' UNION SELECT * FROM users --");
        expect(result).toBeFalse();
    });
});

