import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { bot } from "../index";

export default {
	data: new SlashCommandBuilder().setName("uptime").setDescription(`Get bot's current uptime`),
	cooldown: 10,
	execute(interaction: ChatInputCommandInteraction) {
		let seconds = Math.floor(bot.client.uptime! / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		let days = Math.floor(hours / 24);

		seconds %= 60;
		minutes %= 60;
		hours %= 24;

		return interaction
			.reply({ content: `Uptime: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds` })
			.catch(console.error);
	}
};
