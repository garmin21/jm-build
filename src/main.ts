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
    .command('create <app-name>')
    .description('创建项目')
    .action(async (projectName) => {
      await hasDir(projectName);
      generate(projectName);
    });

  program.parse(process.argv);
}

setup();
