const {Command} = require("commander");
const program = new Command();
program.version('0.0.1');

program
	.option("-d, --debug", 'output extra debugging')
