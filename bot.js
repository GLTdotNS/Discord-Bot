const Discord = require("discord.js");
const {
  clearMessages,
  searchSong,
  reactToMessage,
} = require("./Functions/botFunctions");

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;

  const prefixDelete = "!";
  const prefixSearch = "%";

  if (
    msg.content.toLowerCase().startsWith(prefixDelete + "cc") &&
    msg.author.username === "ValkyrieEUW"
  ) {
    clearMessages(msg);
  }

  reactToMessage(msg);

  if (msg.content.toLowerCase().startsWith(prefixSearch + "s")) {
    searchSong(msg);
  }
});
