/* eslint-disable */

module.exports = {
  description: 'Generate a Component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component Name',
      validate: (value) => {
        if (!value) return 'Value is required'

        return true
      }
    }
  ],

  actions: (data) => {
    const pathTemplate = './components/templates'
    const generatePath = `../src/components/{{ pascalCase name }}`

    const files = () => {
      const arrayFiles = []

      arrayFiles.push({
        data: {},
        path: `${generatePath}`,
        name: 'index.tsx',
        template: 'index.hbs',
        force: false
      })

      arrayFiles.push({
        data: {},
        path: `${generatePath}`,
        name: 'stories.tsx',
        template: 'stories.hbs',
        force: false
      })

      arrayFiles.push({
        data: {},
        path: `${generatePath}`,
        name: 'styles.ts',
        template: 'styles.hbs',
        force: false
      })

      arrayFiles.push({
        data: {},
        path: `${generatePath}`,
        name: 'test.tsx',
        template: 'test.hbs',
        force: false
      })

      return arrayFiles
    }

    // Create Files
    const action = []

    files().forEach((file) => {
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
    const message = () => `Component {{ pascalCase name }} created`
    action.push(message)

    return action
  }
}
