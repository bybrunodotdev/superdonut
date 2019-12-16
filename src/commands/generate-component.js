module.exports = {
  name: 'generate:component',
  description: 'Create new component inside src/views/components',
  alias: ['g:component'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { success, error }
    } = toolbox

    if (!parameters.first) {
      error('😥  Component name must be specified')
    }

    const name = parameters.first

    if (parameters.first) {
      await generate({
        template: 'components/component.js.ejs',
        target: `src/views/components/${name}/index.js`,
        props: { name }
      })

      await generate({
        template: 'components/styles.js.ejs',
        target: `src/views/components/${name}/styles.js`
      })

      success(`👌  Generated file at src/views/components/${name}/index.js`)
      success(`👌  Generated file at src/views/components/${name}/index.js`)
    }
  }
}
