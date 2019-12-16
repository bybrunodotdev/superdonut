module.exports = {
  name: 'configure:eslint',
  description: 'Initial configure your setup application',
  alias: ['c:eslint'],
  run: async toolbox => {
    const {
      template: { generate },
      print: { success, error, info },
      system
    } = toolbox

    info('Wait...')
    await system
      .run('yarn add eslint -D')
      .then(data => success('Eslint installed.'))
    info('Wait...')
    await system
      .run('yarn add eslint-config-airbnb -D')
      .then(data => success('eslint-config-airbnb installed.'))
    info('Wait...')
    await system
      .run('yarn add eslint-config-prettier -D')
      .then(data => success('eslint-config-prettier installed.'))
    info('Wait...')
    await system
      .run('yarn add eslint-import-resolver-alias -D')
      .then(data => success('eslint-import-resolver-alias installed.'))
    info('Wait...')
    await system
      .run('yarn add eslint-plugin-import -D')
      .then(data => success('eslint-plugin-import installed.'))
    info('Wait...')
    await system
      .run('yarn add eslint-plugin-prettier -D')
      .then(data => success('eslint-plugin-prettier installed.'))
    info('Wait...')
    await system
      .run('yarn add eslint-plugin-react -D')
      .then(data => success('eslint-plugin-react installed.'))
    info('Wait...')
    await system
      .run('yarn add eslint-plugin-react-hooks -D')
      .then(data => success('eslint-plugin-react-hooks installed.'))
    info('Wait...')
    await system
      .run('yarn add prettier -D')
      .then(data => success('eslint-plugin-react-hooks installed.'))
    info('Wait...')
    await system
      .run('yarn add babel-eslint -D')
      .then(data => success('eslint-plugin-react-hooks installed.'))

    await generate({
      template: 'eslint/eslint.js.ejs',
      target: `.eslintrc.js`
    })

    success(`👌  Eslint installed and configuration file created successfully!`)
  }
}
