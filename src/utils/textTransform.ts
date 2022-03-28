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

export const sanitize = (text: string) => {
  text = text.replace(/\uFEFF/g, '')
  text = text.replace(/[&\\/\\#,+()$~%!.„'":*‚^_¤?<>|@ª{«»§}©®™ ]/g, '')

  const accentsMap = {
    a: 'á|à|ã|â|À|Á|Ã|Â',
    e: 'é|è|ê|É|È|Ê|ë|Ë',
    i: 'í|ì|î|Í|Ì|Î|ï|Ï',
    o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
    u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    c: 'ç|Ç',
    n: 'ñ|Ñ'
  }

  return Object.keys(accentsMap).reduce(
    (acc, cur) => acc.replace(new RegExp(accentsMap[cur], 'g'), cur),
    text
  )
}
