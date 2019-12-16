module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async toolbox => {
    const {
      print: { info }
    } = toolbox

    info(`Use commands:`)
    info(`🍩  -------------------- 🍩 `)
    info(`👉  superdonut g:component`)
    info(`👉  superdonut g:page`)
    info(`👉  superdonut g:duck`)
    info(`👉  superdonut g:saga`)
  }
}
