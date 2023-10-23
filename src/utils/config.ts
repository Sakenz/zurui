import "dotenv/config";
import { Config } from "../interfaces/Config";

const config: Config = {
	TOKEN: process.env.BOT_TOKEN as string
};

export { config };
