import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { bot } from "../index";
import getString from "../utils/data";

export default {
	data: new SlashCommandBuilder().setName("uptime").setDescription(getString("uptime.description")),
	cooldown: 10,
	async execute(interaction: ChatInputCommandInteraction) {
		let seconds = Math.floor(bot.client.uptime! / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		let days = Math.floor(hours / 24);

		seconds %= 60;
		minutes %= 60;
		hours %= 24;

		return interaction
			.reply({
				content: getString("uptime.result", {
					days: days,
					hours: hours,
					minutes: minutes,
					seconds: seconds
				})
			})
			.catch(console.error);
	}
};
