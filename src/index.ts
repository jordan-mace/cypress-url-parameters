const params: Map<string, string> = new Map();

const addParams = (originalFn: any, url: string, options) => {
  if (url === undefined || url === null) {
    throw new Error('`url` parameter cannot be empty. Got: ' + url)
  }

  params.forEach((value, key) => {
    url += (url.indexOf('?') != -1 ? '&' : '?') + key + '=' + value
  })
}

export const SetParam = (name: string, value: string) => params.set(name, value);
export const RemoveParam = (name: string) => params.delete(name);
Cypress.Commands.overwrite('visit', addParams)