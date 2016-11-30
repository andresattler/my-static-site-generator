#!/usr/bin/env node
import program from 'commander';
import build from '../utils/build';
import develop from '../utils/develop';
program
  .option('-b, build', 'Builds the html')
  .option('-d, develop', 'Starts Development Server')
  .parse(process.argv);


if(program.build) build();
if(program.develop) develop();
