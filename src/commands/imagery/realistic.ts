import {
	AttachmentBuilder,
	ChatInputCommandInteraction,
	SlashCommandBuilder,
	SlashCommandStringOption
} from "discord.js";
import getString from "../../utils/data";

export default {
	data: new SlashCommandBuilder()
		.setName("realistic")
		.setDescription(getString("realistic.description"))
		.addStringOption((option: SlashCommandStringOption) =>
			option
				.setName("text")
				.setDescription(getString("realistic.option"))
				.setMinLength(1)
				.setMaxLength(50)
				.setRequired(true)
		),
	cooldown: 10,
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();

		const text: string = interaction.options.getString("text")!.split(" ").join("_").toLowerCase();
		const image: AttachmentBuilder = new AttachmentBuilder(`https://api.memegen.link/images/dragon/${text}.jpg`, {
			name: "realistic.jpg"
		});

		await interaction.editReply({ files: [image] });
	}
};
