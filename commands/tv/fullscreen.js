const { SlashCommandBuilder } = require('discord.js')
const { keyboard, Key } = require('@nut-tree/nut-js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fullscreen')
    .setDescription('Toggles fullscreen'),

  async execute (interaction) {
    (async () => {
      await keyboard.pressKey(Key.F)
    })()
    interaction.reply('Toggled fullscreen')
  }
}
