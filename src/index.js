#!/usr/bin/env node

import program from 'commander';
import { VERSION } from '../version';

program
  .version(VERSION, '-v, --version')
  .command('init <name>')
  .action(name => {
      console.log(name);
  });

program.parse(process.argv);
