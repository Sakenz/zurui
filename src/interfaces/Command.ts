import { SlashCommandBuilder } from "discord.js";

export interface Command {
	permissions?: String[];
	cooldown?: number;
	data: SlashCommandBuilder;
	execute(...args: any): any;
}
