const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('homepage')
        .setDescription('sends then homepage'),
    async execute(interaction) {
        await interaction.reply('Visit us https://evilinsult.com/%22%3EEvilInsult.com');
    },
};