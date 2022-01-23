const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.json');
const axios = require('axios').default;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('insult')
        .setDescription('generate an evil insult'),
    async execute(interaction, userPrefs) {
        let lang = await userPrefs.get(interaction.user.id) || "en";
        let url = config.mainURL;
        url += "lang=" + lang + "&type=json";
        let response = await axios.get(url);
        let data = await response.data
        console.log(data)
        await interaction.reply(data.insult);
    },
};