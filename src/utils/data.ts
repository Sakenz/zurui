import * as fs from "fs";

interface Data {
	[key: string]: string;
}

interface JSONData {
	[key: string]: Data;
}

const jsonData: JSONData = JSON.parse(fs.readFileSync("src/resources/commands.json", "utf8"));
function getString(path: string, variables?: Record<string, string | number>): string {
	const pathArray = path.split(".");
	let current = jsonData as any;

	for (const key of pathArray) {
		current = current[key];
	}

	if (!variables) {
		return current;
	}

	return current.replace(/\{(\w+)\}/g, (_: string, match: string) => variables[match].toString());
}

export default getString;
