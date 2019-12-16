const command = {
  name: 'superdonut',
  description: '🍩',
  run: async toolbox => {
    const { print, prompt, filesystem } = toolbox

    print.info(`🍩  Are you into a donut today? Welcome to SuperDonut CLI `)
    print.info('--------------------------------------------------------')
    print.info('👋  If this is your first use command: superdonut setup.')
    print.info('👋  Use: superdonut --help for more options')
  }
}

module.exports = command
