const getVisual = (subject: any, selector: string) => {
  if (selector === undefined || selector === null) {
    throw new Error('`selector` parameter cannot be empty. Got: ' + selector)
  }
  
}

Cypress.Commands.add('getVisual', { prevSubject: 'optional' }, getVisual)