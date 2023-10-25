const { SlashCommandBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } = require('discord.js')
const { Key, keyboard } = require('@nut-tree/nut-js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('control')
    .setDescription('Control the TV'),

  async execute (interaction) {
    const prev = new ButtonBuilder()
      .setCustomId('prev-channel')
      .setLabel('<<')
      .setStyle(ButtonStyle.Primary)

    const next = new ButtonBuilder()
      .setCustomId('next-channel')
      .setLabel('>>')
      .setStyle(ButtonStyle.Primary)

    const row = new ActionRowBuilder()
      .addComponents(prev, next)

    const response = await interaction.reply({
      content: `Ahora ${interaction.user.globalName} tiene el controlete de la tele.`,
      components: [row]
    })

    const collectorFilter = i => i.user.id === interaction.user.id

    try {
      const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 180_000 })

      if (confirmation.customId === 'prev-channel') {
        (async () => {
          await keyboard.pressKey(Key.P)
          await keyboard.releaseKey(Key.P)
        })()
        await confirmation.update({ content: 'Channel updated', components: [row] })
      } else if (confirmation.customId === 'next-channel') {
        (async () => {
          await keyboard.pressKey(Key.N)
          await keyboard.releaseKey(Key.N)
        })()
        await confirmation.update({ content: 'Channel updated', components: [row] })
      }
    } catch (e) {
      await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] })
    }
  }

}
