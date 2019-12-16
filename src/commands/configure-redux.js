const command = {
  name: 'configure:redux',
  description: 'Setting up redux in your project',
  alias: ['c:redux'],
  run: async toolbox => {
    const { print, prompt, system } = toolbox

    const question = [
      {
        type: 'select',
        name: 'redux_saga',
        choices: ['yes', 'no'],
        message: 'Add and configure redux-saga?'
      },
      {
        type: 'select',
        name: 'redux_persist',
        choices: ['yes', 'no'],
        message: 'Add and configure redux-persist?'
      }
    ]

    print.info('Coming Soon')

    // await prompt.ask(question).then(data => {
    //   if (data.redux_persist === 'yes' && data.redux_saga === 'no') {
    //     print.info(`🎁  Wait, adding and configuring the redux persist...`)
    //     const install = system
    //       .run('yarn add redux-persist', { trim: true })
    //       .then(data => print.success(`🙆  Wow! It's all OK.`))
    //   }

    //   if (data.redux_persist === 'no' && data.redux_saga === 'yes') {
    //     print.info('🎁  Wait, adding and configuring the redux saga...')
    //   }

    //   if (data.redux_persist === 'yes' && data.redux_saga === 'yes') {
    //     print.info(
    //       '🎁  Wait, adding and configuring the redux persist e redux saga...'
    //     )
    //   }

    //   if (data.redux_persist === 'no' && data.redux_saga === 'no') {
    //     print.info('🎁  Wait, adding and configuring only the o redux...')
    //   }
    // })
  }
}

module.exports = command
