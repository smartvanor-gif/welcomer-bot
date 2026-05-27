const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

const WELCOME_CHANNEL_NAME = "welcome"; // Change this to your channel name

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === WELCOME_CHANNEL_NAME
  );

  if (!channel) {
    console.log(`❌ Could not find a channel named "${WELCOME_CHANNEL_NAME}"`);
    return;
  }

  channel.send(`Welcome to the server, ${member}! 👋 We're glad to have you.`);
});
const http = require("http");
http.createServer((req, res) => res.end("alive")).listen(3000);
client.login(process.env.TOKEN);
