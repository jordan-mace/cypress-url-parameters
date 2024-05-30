const CYPRESS_ENV_NAME = require('./utils/globals');
const addParameters = (originalFn, url, options) => {
    if (url === undefined || url === null) {
        throw new Error('`url` parameter cannot be empty. Got: ' + url)
    }

    url += Cypress.env(CYPRESS_ENV_NAME);
    originalFn(url, options);
}

module.exports = addParameters;