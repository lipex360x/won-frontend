import crypto from 'crypto'

const textTransform = {
  capitalize: (word: string): string =>
    word.charAt(0).toUpperCase() + word.toLowerCase(),

  pascalCase: (word: string): string =>
    word.replace(/([-_ ]\w)/g, (text) => text[1].toUpperCase()),

  camelCase: (word: string): string =>
    word.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2) {
      if (p2) return p2.toUpperCase()
      return p1.toLowerCase()
    }),

  snakeCase: (string: string): string =>
    string
      .replace(/\d+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join('_'),

  generateId: (size = 20): string => crypto.randomBytes(size).toString('hex')
}

export default textTransform
