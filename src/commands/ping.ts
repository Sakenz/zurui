import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
	data: new SlashCommandBuilder().setName("ping").setDescription("Shows the bot's average ping"),
	cooldown: 10,
	execute(interaction: ChatInputCommandInteraction) {
		interaction
			.reply({ content: `Average ping is ${interaction.client.ws.ping}`, ephemeral: true })
			.catch(console.error);
	}
};
