const { SlashCommandBuilder } = require('discord.js')
const { keyboard, Key } = require('@nut-tree/nut-js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('volume-up')
    .setDescription('Volume Up'),

  async execute (interaction) {
    (async () => {
      await keyboard.pressKey(Key.LeftControl, Key.Up)
    })()
    interaction.reply('Volume Up')
  }
}
