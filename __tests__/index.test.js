const setString = require('../lib/utils/setString');
const removeString = require('../lib/utils/removeString');

describe("addParameter", () => {
    test("Adds single param", () => {
        var val = setString("token", "abcd", 'https://www.google.com/');
        expect(val === "https://www.google.com/?token=abcd");
    });
    test("Adds multiple params", () => {
        var val = setString("token", "abcd", 'https://www.google.com/');
        val = setString("token2", "fghk", val);
        val = setString('token2', 'fghk', val);

        expect(val === "https://www.google.com/?token=abcd&token2=fghk");
    });
    test("Removes middle param", () => {

        var val = setString('token', 'abcd', "https://www.google.com/");
        val = setString('token2', 'fghk', val);
        val = setString('token3', 'asbcd', val);
        expect(val === "https://www.google.com/?token=abcd&token2=fghk&token3=asbcd");

        val = removeString('token2', val);
        expect(val === "https://www.google.com/?token=abcd&token3=asbcd")
    });
});