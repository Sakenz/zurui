import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import getString from "../../utils/data";

export default {
	data: new SlashCommandBuilder().setName("ping").setDescription(getString("ping.description")),
	cooldown: 10,
	execute(interaction: ChatInputCommandInteraction) {
		interaction
			.reply({
				content: getString("ping.result", { ping: interaction.client.ws.ping }),
				ephemeral: true
			})
			.catch(console.error);
	}
};
