import {
	SlashCommandBuilder,
	PermissionFlagsBits,
	SlashCommandNumberOption,
	ChatInputCommandInteraction,
	Snowflake
} from "discord.js";
import getString from "../utils/data";

export default {
	data: new SlashCommandBuilder()
		.setName("purge")
		.setDescription(getString("purge.description"))
		.addNumberOption((option: SlashCommandNumberOption) =>
			option
				.setName("number")
				.setDescription(getString("purge.option"))
				.setMinValue(1)
				.setMaxValue(100)
				.setRequired(true)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
		.setDMPermission(false),
	cooldown: 5,
	async execute(interaction: ChatInputCommandInteraction) {
		const channelID: Snowflake = interaction.channelId;
		//const channel: any = interaction.client.channels.fetch(channelID);

		const channel: any = interaction.guild!.channels.cache.get(channelID)!;

		const { size } = await channel.bulkDelete(interaction.options.getNumber("number")!);

		await interaction.reply(getString("purge.result", { no: size }));
	}
};
