const params: Map<string, string> = new Map();

export const addParameters = (originalFn: any, url: string, options) => {
  if (url === undefined || url === null) {
    throw new Error('`url` parameter cannot be empty. Got: ' + url)
  }

  params.forEach((value, key) => {
    url = addParameter(key, value, url);
  })
}

export const addParameter = (key: string, value: string, url: string) => {
  url += (url.indexOf('?') != -1 ? '&' : '?') + key + '=' + value
  return url;
}

export const setParameter = (name: string, value: string) => params.set(name, value);
export const removeParameter = (name: string) => params.delete(name);