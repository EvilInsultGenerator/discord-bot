const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const request = require('request');
const sql = require("sqlite");
const languageList = require('./Languages.json');
var decode = require('unescape');
sql.open("./users.sqlite");

var languages = languageList.languages;

var languagesStr = "";

for (let i = 0; i < languages.length; i++) {
  languagesStr += languages[i] + "  "
}

console.log("Supported languages: " + languagesStr);

bot.login(config.token);


var ver = "1.1"

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.username}!`);
  console.log("Evil Insult Bot Version: " + ver);
  bot.user.setGame("v" + ver)
  sql.run("CREATE TABLE IF NOT EXISTS settings (userID TEXT, language TEXT)")
});

const prefix = config.prefix;

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.toLowerCase().slice(prefix.length).split(' ');
  //console.log(command);
  console.log("COMMAND: " + message.author.username + ": " + message.content);

  if (command[0] === "insult") {
    getUserSettings(message.author.id).then(language => {
      console.log("user settings: " + language);
      var url = config.mainURL
      url += "lang=" + language + "&type=json"
      request(url, function(error, response, html) {
        if (!error) {
          let data = JSON.parse(html);
          let insult = decode(data.insult)
          console.log(insult + "  --- sent from main server");
          message.channel.send(insult);
        } else if (error) {
          console.log("problem with main server, trying slave server...");
          url = config.slaveURL
          url += "lang=" + language + "&type=json"
          request(url, function(error, response, html) {
            if (!error) {
              let data = JSON.parse(html);
              let insult = decode(data.insult)
              console.log(insult + "  --- sent from slave server");
              message.channel.send(insult);
            } else if (error) {
              console.log("Both servers are down.");
            }
          })
        }
      })
    }).catch(err => console.log(err));
  }

  if (command[0] === "language") {
    initUser(message.author.id).then(() => {
      if (!languages.includes(command[1])) return message.reply("That language is not supported. \n" + languagesStr);
      setLanguage(message.author.id, command[1]);
      message.reply("Language has been set to " + command[1]);
    }).catch(err => console.log(err));
  }
});


function getUserSettings(id) {
  return sql.get(`SELECT * FROM settings WHERE userID ="${id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO settings (userID, language) VALUES (?, ?)", [id, config.language]);
      console.log("New user settings created for " + id + ", default language " + config.language + ".");
      return config.language
    } else {
      return row.language;
    }
  }).catch(() => {
    console.error;
  });
}

function setLanguage(id, lang) {
  sql.get(`SELECT * FROM settings WHERE userID ="${id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO settings (userID, language) VALUES (?, ?)", [id, lang]);
    } else {
      sql.run(`UPDATE settings SET language = "${lang}" WHERE userID = ${id}`).catch(err => console.log(err));
    }
  });
}
