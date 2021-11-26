# Discord-Starter-Bot

A simple, self-hosted Discord bot with limited commands built using the Node.js module: [discord.js](https://discord.js.org/)

## Requirements

- [Visual Studio Code](https://code.visualstudio.com/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-node-js-and-npm)
- [Node.js](https://nodejs.org/)

## How to Setup

1.) Clone this repository by copying and pasting this URL into Visual Studio Code: https://github.com/selk21/Discord-Starter-Bot.git

2.) Open a new terminal and run `npm install` to install all dependencies.

3.) Follow this simple guide on how to setup your own Discord bot application: https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot

4.) Copy you bot's token into the `.env` file.

5.) In order to add your bot to your Discord server you will have to create a unique invite link that follows this format: 

`https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands`

In order to obtain this link, head to the [My Apps](https://discord.com/developers/applications) page under the "Applications" section, click on your bot application, and open the "OAuth2" page. Under "OAuth2" go to "URL Generator" and under “scopes” click on `bot` and `applications.command`. After clicking those two, go under "bot permissions" and click on `Administrator`. Copy the generated URL at the bottom of the page and paste and search that URL onto your web browser.

![Screenshot 2021-11-23 193608_LI](https://user-images.githubusercontent.com/85317561/143383635-abe55d28-c341-4eb6-bace-08ce68258224.jpg)

6.) Click on the server you’d like to have your bot in.

7.) Go back to your Visual Studio Code terminal and run `npm run start` or `npm run dev` to have your bot logged into your server. 

Congratulations, your bot should be up and running!

## Commands/Phrases

- Typing `hello` will make the bot send a message to the channel saying "hello". 

- The `$kick [ID]` command will kick a member of your server. (In order to obtain the ID of a user, you must have your Developer Mode turned on in your advanced Discord settings. Once this is completed you can right-click on a user and you will be given an option to copy their ID.) 

- The `$ban [ID]` command will ban a member of your server.

- The `$inspire` command will generate a random inspirational quote along with the author who said it.

- The `$rolldice` command will generate a random number between 1 - 6.

## How to Contribute

If you wish to contribute to the project, please feel free to fork the repository and submit a pull request.

## Coding Standards

- When making commands for the application, please adhere to the coding style from the previous commands.

- For example, please use single quotes `''` instead of double quotes `""` whenever it's necessary.

- Comment the name of the command and what it does above the code of the command.


