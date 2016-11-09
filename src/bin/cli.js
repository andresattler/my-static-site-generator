#!/usr/bin/env node
import program from 'commander';
import build from '../utils/build';

program
  .option('-b, build', 'Builds the html')
  .parse(process.argv);


if(program.build) build();
