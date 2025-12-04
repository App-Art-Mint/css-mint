import fs from 'fs';
import { runCommand } from './run-command';

const modulesPath = 'src/modules';
const modules = fs.readdirSync(modulesPath);

modules.forEach((module) => {
	runCommand(`echo "Building ${modulesPath}/${module}"`);
	runCommand(`sass ${modulesPath}/${module} dist/${module.replace('.scss', '.css')}`);
	runCommand(`sass ${modulesPath}/${module} dist/${module.replace('.scss', '.min.css')} --style compressed`);
});

runCommand(`echo "Modules built successfully"`);