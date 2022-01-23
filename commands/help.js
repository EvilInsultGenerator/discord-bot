const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('sends help message'),
    async execute(interaction) {
        await interaction.reply("use / to see a list of commands");
        //await interaction.reply('To generate an insult use /insult \nTo set the language use /language\nTo visit the homepage use /homepage\nTo get help use /help');
    },
};