require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client({intents: ["GUILD_MESSAGES"]}); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
    if (msg.content === "who's back?") {
      msg.reply('Benders back, baby!');
    }
  });

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token