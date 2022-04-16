import crypto from 'crypto'

type AccentsMapProps = {
  [key: string]: string
}

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

  generateId: (size = 20): string => crypto.randomBytes(size).toString('hex'),

  sanitize: (text: string) => {
    text = text
      .replace(/\uFEFF/g, '')
      .replace(/[&\\/\\#,+()$~%!.„'":*‚^_¤?<>|@ª{«»§}©®™ ]/g, '')

    const accentsMap: AccentsMapProps = {
      a: 'á|à|ã|â|À|Á|Ã|Â',
      e: 'é|è|ê|É|È|Ê|ë|Ë',
      i: 'í|ì|î|Í|Ì|Î|ï|Ï',
      o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      c: 'ç|Ç',
      n: 'ñ|Ñ'
    }

    return Object.keys(accentsMap).reduce(
      (acc: string, cur: string) =>
        acc.replace(new RegExp(accentsMap[cur], 'g'), cur),
      text
    )
  }
}

export default textTransform
