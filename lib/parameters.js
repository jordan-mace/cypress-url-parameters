const params = new Map();

export const addParameters = (originalFn, url, options) => {
  if (url === undefined || url === null) {
    throw new Error('`url` parameter cannot be empty. Got: ' + url)
  }

  params.forEach((value, key) => {
    url = addParameter(key, value, url);
  })
}

export const addParameter = (key, value, url) => {
  url += (url.indexOf('?') != -1 ? '&' : '?') + key + '=' + value
  return url;
}

export const setParameter = (name, value) => params.set(name, value);
export const removeParameter = (name) => params.delete(name);

Cypress.Commands.overwrite('visit', addParameters)