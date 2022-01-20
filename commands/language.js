const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('language')
        .setDescription('sets your preferred language'),
    async execute(interaction) {
        await interaction.reply('To generate an insult: !generate or !insult or !fuck\nTo set the language: !language\nTo visit the homepage: !homepage\nTo get help: !help');
    },
};