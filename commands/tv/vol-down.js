const { SlashCommandBuilder } = require('discord.js')
const { keyboard, Key } = require('@nut-tree/nut-js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('volume-down')
    .setDescription('Volume down'),

  async execute (interaction) {
    (async () => {
      await keyboard.pressKey(Key.LeftControl, Key.Down)
      await keyboard.releaseKey(Key.LeftControl, Key.Down)
    })()
    interaction.reply('Volume down')
  }
}
