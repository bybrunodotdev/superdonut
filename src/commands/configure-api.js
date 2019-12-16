const command = {
  name: 'configure:api',
  description: 'Setting up your api file',
  alias: ['c:api'],
  run: async toolbox => {
    const { print, prompt, system } = toolbox
    print.info('Coming Soon')
  }
}

module.exports = command
