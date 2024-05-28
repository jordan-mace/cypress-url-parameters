import { setParameter, addParameter, addParameters } from "../src/parameters";

describe("addParameter", () => {
    test("Adds single param", () => {
        expect(addParameter("token", "abcd", "https://www.google.com") === "https://www.google.com?token=abcd");
    });
    test("Adds multiple params", () => {
        setParameter('token', 'abcd');
        setParameter('token2', 'fghk');

        let url = "https://www.google.com"
        addParameters(undefined, url, undefined);

        expect(url === "https://www.google.com?token=abcd&token2=fghk");
    });
});