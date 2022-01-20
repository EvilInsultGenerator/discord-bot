const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('homepage')
        .setDescription('sends then homepage'),
    async execute(interaction) {
        await interaction.reply('To generate an insult: !generate or !insult or !fuck\nTo set the language: !language\nTo visit the homepage: !homepage\nTo get help: !help');
    },
};