import chalk = require("chalk");
import options from "../options"
import { cursorTo, clearScreenDown } from "readline";

export default function (color: string, str: string) {
  if(process.stdout.isTTY) {
    console.log('')
    const cutLine = ` jm-build ${options.version} `;
    console.log(chalk.bgCyan(' -'.repeat(process.stdout.columns - cutLine.length)));
    const blank = '\n'.repeat(process.stdout.rows)

    console.log(blank)

    cursorTo(process.stdout, 0, 0)
    clearScreenDown(process.stdout);

    console.info(chalk[color](str))

    console.log('')

  }
}