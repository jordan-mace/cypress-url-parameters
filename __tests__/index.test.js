const setParameter = require("../lib/setParameterHandler");
const removeParameter = require('../lib/removeParameterHandler');

const CYPRESS_ENV_NAME = "UrlParameters";

describe("addParameter", () => {
    test("Adds single param", () => {
        setParameter("token", "abcd");
        expect(Cypress.env(CYPRESS_ENV_NAME) === "?token=abcd");
    });
    test("Adds multiple params", () => {
        setParameter('token', 'abcd');
        setParameter('token2', 'fghk');

        expect(Cypress.env(CYPRESS_ENV_NAME) === "?token=abcd&token2=fghk");
    });
    test("Removes middle param", () => {
        setParameter('token', 'abcd');
        setParameter('token2', 'fghk');
        setParameter('token3', 'asbcd');
        expect(Cypress.env(CYPRESS_ENV_NAME) === "?token=abcd&token2=fghk&token3=asbcd");
        removeParameter('token2');
        expect(Cypress.env(CYPRESS_ENV_NAME)=== "?token=abcd&token3=asbcd")
    });
});