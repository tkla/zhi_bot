import dotenv from 'dotenv'
dotenv.config()
import axios from 'axios';
import Discord from 'discord.js'; //import discord.js
import { Client, Intents } from 'discord.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('voiceStateUpdate', (oldState, newState) => {
  // Ignore bot and non Zhi users
  if (oldState.member.user.bot || oldState.member.user.username !== 'Fu Manchu') return;

  // Determine Zhi state
  if (!oldState.channelId) {
    console.log("He's here");
  }
})

client.login(process.env.CLIENT_TOKEN); //login bot using token