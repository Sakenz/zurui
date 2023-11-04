import { ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandStringOption } from "discord.js";
import getString from "../utils/data";

export default {
	data: new SlashCommandBuilder()
		.setName("changemymind")
		.setDescription(getString("cmm.description"))
		.addStringOption((option: SlashCommandStringOption) =>
			option
				.setName("text")
				.setDescription(getString("cmm.option"))
				.setMinLength(1)
				.setMaxLength(50)
				.setRequired(true)
		),
	cooldown: 10,
	execute(interaction: ChatInputCommandInteraction) {
		const text: string = interaction.options.getString("text")!.split(" ").join("_").toLowerCase();
		interaction.reply(`https://api.memegen.link/images/cmm/${text}.jpg`);
	}
};
