[![Build Status](https://travis-ci.org/Astrydax/discord-bot.svg?branch=master)](https://travis-ci.org/EvilInsultGenerator/discord-bot)
[![Coverage Status](https://coveralls.io/repos/github/EvilInsultGenerator/discord-bot/badge.svg?branch=master)](https://coveralls.io/github/EvilInsultGenerator/discord-bot?branch=master)
[![codebeat badge](https://codebeat.co/badges/4b25afd3-ec15-40c6-a2ad-8f6624b28a72)](https://codebeat.co/projects/github-com-evilinsultgenerator-discord-bot-master)
[![David](https://img.shields.io/david/EvilInsultGenerator/discord-bot.svg)](https://david-dm.org/EvilInsultGenerator/discord-bot)
[![bitHound Overall Score](https://www.bithound.io/github/EvilInsultGenerator/discord-bot/badges/score.svg)](https://www.bithound.io/github/EvilInsultGenerator/discord-bot)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1187/badge)](https://bestpractices.coreinfrastructure.org/projects/1187)



# Evil Insult Generator Discord Bot

Evil Insult Generator's goal is to offer the most evil insults. Please help us to reach this honorable purpose by submitting insults
via mail.

![Evil Insult Generator Icon](https://cloud.githubusercontent.com/assets/22981912/19600664/5521d010-97a6-11e6-9f67-fec931b199d7.png)

## Installation


*	### PC/Mac
    1. First you will need to have NodeJS installed on your machine. You can find the latest version [here](https://nodejs.org/en/)
    2. Next create a discord account for your bot and add it to your discord server. There is a very good guide explaining this [here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
	3. Click "Clone or Download" at the top of this page. Click "Download Zip" and extract the files.
	4. Open a command terminal and navigate to the root folder of the bot.
	5. While in the root folder, run the command: npm install
	6. Open config.json with a text editor program of your choice.
	7. Replace "YOUR BOT TOKEN" with your bot token you created in step 2 above
	8. Your bot is now configured and ready to launch. run the command: node main.js

*	### VPS
    Each VPS service will have varying steps for connecting to your server. We will use Digital Ocean Droplet in this example
    1. Click "Clone or Download" at the top of this page. Click "Download Zip" and extract the files.
    2. Next create a discord account for your bot and add it to your discord server. There is a very good guide explaining this [here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
    3. Open config.json with a text editor program of your choice.
	4. Replace "YOUR BOT TOKEN" with your bot token you created in step 2 above
	5. Login to digital ocean and create a new droplet. Select Ubuntu. 16.04 is recommended. Then choose a server size and region.
	6. You will recieve an email from digital ocean with a username and password for your new droplet.
	7. Go to the "Access" tab and click "Launch Console" and login with the username and password you received. You will be asked to change your password.
	8. Install NodeJS using [these commands](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/)
	9. Next we need to connect to the droplet using an FTP client. For this example we're goint to use [FileZilla](https://filezilla-project.org/)
	10. Near the top of the FileZilla window you will see the fields: "Host", "Username", "Password", and "Port". In Host, put the IP to your droplet server. In username put the username you were emailed. In password, put the new password you created in step 7. In port, put 22. Click connect.
	11. On the left half of FileZilla is your local machine and the right half is your remote server. Drag the entire folder you downloaded and configured in step 1 to the window on the right to upload it to your droplet.
	12. Back in the Droplet console window. Navigate to bot folder using the command: cd discord-bot-master  . If changed the name of the folder use cd [folder name]
	13. run the command: npm install
	14. Your bot is now configured and ready to launch. run the command: node main.js


## Using pm2

If you would like to run constantly and restart if it crashes consider using pm2. There is an excellent guide on pm2 [here](http://pm2.keymetrics.io/docs/usage/quick-start/)




## Contact

We love to get in touch with you. Feel welcome to email your questions and feedback to [marvin@evilinsult.com](mailto:marvin@evilinsult.com).

### License
> This is free and unencumbered software released into the public domain.
>
> Anyone is free to copy, modify, publish, use, compile, sell, or
> distribute this software, either in source code form or as a compiled
> binary, for any purpose, commercial or non-commercial, and by any
> means.
>
> In jurisdictions that recognize copyright laws, the author or authors
> of this software dedicate any and all copyright interest in the
> software to the public domain. We make this dedication for the benefit
> of the public at large and to the detriment of our heirs and
> successors. We intend this dedication to be an overt act of
> relinquishment in perpetuity of all present and future rights to this
> software under copyright law.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
> OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
> ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.
>
> For more information, please refer to <http://unlicense.org/>

## Screenshots
_TBD_
![Evil Insult Generator PHP Telegram Bot Screenshot](https://cloud.githubusercontent.com/assets/23016876/19628589/82888d5c-9961-11e6-8bc3-dceeec130800.png)

### Credits
I am deeply grateful that [JetBrains](https://www.jetbrains.com/) sponsored two licenses of [WebStorm](https://www.jetbrains.com/webstorm/)
[![WebStorm](https://user-images.githubusercontent.com/16610908/28754026-65f4866a-753d-11e7-97cb-9c59fffbc9a6.png)](https://www.jetbrains.com/webstorm/)
