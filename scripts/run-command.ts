import { spawn } from "child_process";

export function runCommand(command: string): void {
	const fullCommand = `cross-replace ${command}`;
	const child = spawn(fullCommand, {
		stdio: "inherit",
		shell: true,
	});

	child.on("error", (err) => {
		console.error(err.message);
		process.exit(1);
	});

	child.on("exit", (code) => {
		if (code !== 0) {
			process.exit(code || 1);
		}
	});
}
