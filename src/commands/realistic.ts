import { ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandStringOption } from "discord.js";
import getString from "../utils/data";

export default {
	data: new SlashCommandBuilder()
		.setName("realistic")
		.setDescription(getString("realistic.description"))
		.addStringOption((option: SlashCommandStringOption) =>
			option
				.setName("text")
				.setDescription(getString("realistic.option"))
				.setMinLength(1)
				.setMaxLength(200)
				.setRequired(true)
		),
	cooldown: 10,
	execute(interaction: ChatInputCommandInteraction) {
		const text: string = interaction.options.getString("text")!.split(" ").join("_").toLowerCase();

		interaction.reply(`https://api.memegen.link/images/dragon/${text}.jpg`);
	}
};
