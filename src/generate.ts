import options from './options';
import path = require('path');
import createSpawnCmd from './utils/createSpawnCmd';
import clearConsole from './utils/clearConsole';
import * as fs from 'fs-extra';
import chalk = require('chalk');
import ora from 'ora';

let startTime: number, endTime: number;

// 1. 我们要询问用户，你是使用 vue2 + element-ui 的开发用户吗？
// 2. 我们将 copy 字典中命中的模块

export default async function (name: string): Promise<void> {
  console.log(chalk.rgb(216, 27, 96)('\n 😈😈😈  雷猴啊, 靓仔~~'))
  console.log(chalk.cyanBright(' 🦄🦄🦄  靓仔正在使用 jm-build 命令行工具...\n'))

  const templateName = 'element-pro-vue';
  options.src = path.resolve(__dirname, '../template/' + templateName);

  options.name = name;
  options.dest = path.resolve(process.cwd(), name);

  const cmdIgnore = createSpawnCmd(options.dest, 'ignore');
  const cmdInherit = createSpawnCmd(options.dest, 'inherit');

  clearConsole('cyan', `jm-build v${options.version}`);

  startTime = new Date().getTime();

  const spinner = ora({
    text: '正在生成项目模板...',
    color: 'yellow',
    spinner: {
      interval: 80,
      frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
    },
  });
  spinner.start();

  await fs.copy(options.src, options.dest);
  spinner.stop()
  console.log(`> 项目模板生成于目录: ${chalk.blue(options.dest)}`);
  // Git 初始化
  await cmdIgnore('git', ['init']);
  await cmdIgnore('git', ['add .']);
  await cmdIgnore('git', ['commit', '-m', '"Initialize by jm-build"']);

  console.log(`> 成功初始化 Git 仓库`);

  // 依赖安装
  console.log(`> 正在自动安装依赖，请稍等...`);
  console.log('');
  await cmdInherit('npm', ['install']);

  clearConsole('cyan', `jm-build v${options.version}`);
  endTime = new Date().getTime();
  const usageTime = (endTime - startTime) / 1000;
  console.log(
    `> 项目已经创建成功，用时${chalk.cyan(usageTime)}s，请输入以下命令继续...`
  );
  console.log('');
  console.log(chalk.cyan(' $ ') + chalk.blueBright(`cd ${name}`));
  console.log(chalk.cyan(' $ ') + chalk.blueBright('npm run dev'));
}
