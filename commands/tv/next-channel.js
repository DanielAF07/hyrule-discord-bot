const { SlashCommandBuilder } = require('discord.js')
const { keyboard, Key } = require('@nut-tree/nut-js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('next-channel')
    .setDescription('Changes the channel to the next one'),

  async execute (interaction) {
    (async () => {
      await keyboard.pressKey(Key.N)
      await keyboard.releaseKey(Key.N)
    })()
    interaction.reply('Changed channel')
  }
}
