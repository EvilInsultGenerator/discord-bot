const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.json');
const axios = require('axios').default;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('insult')
        .setDescription('generate an evil insult'),
    async execute(interaction) {

        let url = config.mainURL;
        url += "lange=EN&type=json";

        let response = await axios.get(url);
        let data = await response.data
        console.log(data)
        await interaction.reply(data.insult);
    },
};