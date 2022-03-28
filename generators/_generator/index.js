/* eslint-disable */
const { camelCase } = require('../_utils/textTransform')

module.exports = {
  description: 'Generate a {{pascalCase name }}',
  prompts: [
    {
      type: 'input',
      name: 'fileName',
      message: 'File Name',
      // default: 'test',
      validate: (value) => {
        if (!value) return 'Value is required'

        return true
      }
    }

    // snippet: plopPromptTemplate
  ],

  actions: (data) => {
    const pathTemplate = './{{ name }}/templates'
    const generatePath = `../modules/${camelCase(data.moduleName)}`


    const files = () => {
      const arrayFiles = []

      arrayFiles.push({
        data: {},
        path: `${generatePath}/xxxx`,
        name: 'fileName.ts',
        template: '{{ name }}.hbs',
        force: false
      })

      // snippet: plopFilesTemplate

      return arrayFiles
    }

    // Create Files
    const action = []

    files().forEach(file => {
      const createFile = {
        type: 'add',
        path: `${file.path}/${file.name}`,
        data: file.data,
        templateFile: `${pathTemplate}/${file.template}`,
        // force: !!file.force
        force: true
      }

      action.push(createFile)
    })

    // Message
    const message = () => (`Module ${data.moduleName} created`)
    action.push(message)

    return action
  }
}
