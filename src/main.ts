#! /usr/bin/env node

import { program } from 'commander';
import packageVersion from './utils/packageVersion';
import hasDir from './utils/hasDir';
import options from './options';
import generate from './generate';

async function setup() {
  await packageVersion();
  program.version(options.version).usage('<command> [options]');

  program
    .command('create <projectName>')
    .description('用于创建一个项目模板')
    // .option('-T, --template [template]', '输入使用的模板名字')
    .action(async (projectName) => {
      await hasDir(projectName);
      generate(projectName);
    });

  program.parse(process.argv);
}

setup();
