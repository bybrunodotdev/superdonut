module.exports = {
  name: 'generate:page',
  description: 'Create new page inside src/views/pages',
  alias: ['g:page'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { success, error }
    } = toolbox

    if (!parameters.first) {
      error('😥  Page name must be specified')
    }

    const name = parameters.first

    if (parameters.first) {
      await generate({
        template: 'pages/page.js.ejs',
        target: `src/views/pages/${name}/index.js`,
        props: { name }
      })

      await generate({
        template: 'pages/styles.js.ejs',
        target: `src/views/pages/${name}/styles.js`
      })

      success(`👌  Generated file at src/views/pages/${name}/index.js`)
      success(`👌  Generated file at src/views/pages/${name}/styles.js`)
    }
  }
}
