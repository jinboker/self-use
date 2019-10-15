#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const { VERSION } = require('../version');
const { addAction } = require('./action');

program
  .version(VERSION, '-v, --version');

// 添加内容
program
  .command('add [type]')
  .action(type => {
    if (type === undefined) {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'action',
            message: '请选择操作',
            choices: Object.keys(addAction),
          },
        ])
        .then(({ action }) => {
          if (action in addAction) {
            addAction[action]();
          }
        });

      return;
    }

    if (type in addAction) {
      addAction[type]();
      return;
    }

    throw Error('请输入正确的type');
  });

program.parse(process.argv);
