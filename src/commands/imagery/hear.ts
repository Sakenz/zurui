import {
	AttachmentBuilder,
	ChatInputCommandInteraction,
	SlashCommandBuilder,
	SlashCommandStringOption
} from "discord.js";
import getString from "../../utils/data";

export default {
	data: new SlashCommandBuilder()
		.setName("hear")
		.setDescription(getString("hear.description"))
		.addStringOption((option: SlashCommandStringOption) =>
			option
				.setName("text")
				.setDescription(getString("hear.option"))
				.setMinLength(1)
				.setMaxLength(50)
				.setRequired(true)
		),
	cooldown: 10,
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.deferReply();

		const text: string = interaction.options.getString("text")!.split(" ").join("_").toLowerCase();
		const image: AttachmentBuilder = new AttachmentBuilder(
			`https://api.memegen.link/images/doge/did_I_just_hear/${text}~q.jpg`,
			{
				name: "hear.jpg"
			}
		);

		await interaction.editReply({ files: [image] });
	}
};
