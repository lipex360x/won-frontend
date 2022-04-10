// eslint-disable
import crypto from 'crypto'

export const capitalize = (word: string) => {
  const lower = word.toLowerCase()

  return word.charAt(0).toUpperCase() + lower.slice(1)
}

export const pascalCase = (word: string) => {
  return word.replace(/([-_ ]\w)/g, (text) => text[1].toUpperCase())
}

export const camelCase = (word: string) => {
  return word.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
    if (p2) return p2.toUpperCase()
    return p1.toLowerCase()
  })
}

export const snakeCase = (string: string) => {
  return string
    .replace(/\d+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('_')
}

export const generateId = (size = 20) => {
  return crypto.randomBytes(size).toString('hex')
}
