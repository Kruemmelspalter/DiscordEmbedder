const { Client, Intents } = require('discord.js');
const generateEmbed = require('./embed');
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', c => {
	console.log(`Logged in as ${c.user.tag} (${c.user.id})!`);
});

client.on('interactionCreate', i => {
	if (!i.isCommand()) return;

	if (i.commandName === 'embed') {

		const result = generateEmbed(i.options.getString('link'));
		if (result === null) {
			i.reply({ content: '\u274C This type of link isn\'t known. If you\'d like a new site ' +
				'added, please contact the developer', ephemeral: true });
		} else {
			i.reply({ embeds: [result] });
		}
	} else {
		i.reply({ content: '\u274C This command is not implemented (yet)! If this issue persists, please contact the ' +
				'developer.', ephemeral: true });
	}
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN).catch(console.error);
