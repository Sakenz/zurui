import {
	ChatInputCommandInteraction,
	GuildMember,
	SlashCommandBooleanOption,
	SlashCommandBuilder,
	Snowflake,
	PermissionFlagsBits,
	VoiceBasedChannel
} from "discord.js";
import getString from "../../utils/data";

export default {
	data: new SlashCommandBuilder()
		.setName("muteall")
		.setDescription(getString("muteall.description"))
		.addBooleanOption((option: SlashCommandBooleanOption) =>
			option.setName("mute").setDescription("muteall.option").setRequired(true)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.MuteMembers)
		.setDMPermission(false),
	cooldown: 5,
	execute(interaction: ChatInputCommandInteraction) {
		const memberID: Snowflake = interaction.member!.user.id;

		const guildMember: GuildMember | undefined = interaction.guild!.members.cache.get(memberID);

		const voiceChannel: VoiceBasedChannel = guildMember!.voice.channel!;

		if (!voiceChannel) {
			return interaction.reply({ content: getString("error.notVoiceChannel") });
		}

		const choice: boolean = interaction.options.getBoolean("mute")!;

		for (const [, member] of voiceChannel.members) {
			member.voice.setMute(choice);
		}

		return interaction.reply({ content: getString("muteall.result") });
	}
};
