const command = {
  name: 'configure:donutbox',
  description: 'The box complete with all donuts set up',
  alias: ['c:donutbox'],
  run: async toolbox => {
    const { print, prompt, system } = toolbox

    print.info('Coming Soon')
  }
}

module.exports = command
