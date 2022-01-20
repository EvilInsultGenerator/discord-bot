const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('insult')
        .setDescription('generate an evil insult'),
    async execute(interaction) {

        let url = config.mainURL;
        url += "lange=EN&type=json";

        let response = await fetch(url);
        console.log(response)
        await interaction.reply('INSERT INSULT HERE');
    },
};