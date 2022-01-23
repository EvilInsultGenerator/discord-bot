const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageActionRow, MessageEmbed, MessageSelectMenu, SelectMenuInteraction} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('language')
        .setDescription('sets your preferred language'),
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('language')
                    .setPlaceholder('Nothing selected')
                    .addOptions([
                        {
                            label: 'English',
                            value: 'en',
                        },
                        {
                            label: 'Español',
                            value: 'es',
                        }, {
                            label: 'Deutsch',
                            value: 'de',
                        }
                    ]),
            );

        await interaction.reply({content: 'Please Select a language.', ephemeral: true, components: [row]});
    },
    async executeInteraction(/** MessageComponentInteraction */ interaction, userPrefs){
        if (!interaction.isSelectMenu()) return;
        if(interaction.customId === "language"){
            console.log(interaction.values)
            await userPrefs.set(interaction.user.id, interaction.values[0]);
            interaction.reply({content: ":thumbsup:", ephemeral: true})
        }

    },
};