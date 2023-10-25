const { SlashCommandBuilder } = require('discord.js')
const { keyboard, Key } = require('@nut-tree/nut-js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('prev-channel')
    .setDescription('Changes the channel to the previous one'),

  async execute (interaction) {
    (async () => {
      await keyboard.pressKey(Key.P)
      await keyboard.releaseKey(Key.P)
    })()
    interaction.reply('Changed channel')
  }
}
