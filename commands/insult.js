const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.json');
const requestHandler = require('axios').default;
const axios = requestHandler.create({
    timeout: 500,
});

module.exports = {
    data: new SlashCommandBuilder()
        .setName('insult')
        .setDescription('generate an evil insult'),
    async execute(interaction, userPrefs) {

        //Build the url string
        let lang = await userPrefs.get(interaction.user.id) || "en";
        let url = config.mainURL;
        let urlSuffix = "lang=" + lang + "&type=json";
        url += urlSuffix;

        //try the main URL first
        try {
           const response = await axios.get(url)
            sendInsult(interaction, response);
        } catch (error) {
            console.log("Master URL did not work, defaulting to slaveURL");
            //On error try the slave URL

            try{
                //build the slave URL
                let slaveURL = config.slaveURL;
                slaveURL += urlSuffix;
                console.log(slaveURL);

                const response = await axios.get(slaveURL);
                sendInsult(interaction, response);
            }catch (e) {
                console.log("both URLs failed")
                await interaction.reply("The service is down. Please try again later.")
            }

        }

        async function sendInsult(interaction, response){
            console.log("sending insult")
            let data = await response.data
            console.log(data)
            await interaction.reply(data.insult);
        }

    },
};