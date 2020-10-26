#!/usr/bin/env node
import * as git from '../git';

const run = async () => {
  try {
    console.log('⌛ git configuring...');
    git.config();
    console.log('⌛ git checkout...');
    git.checkout();
    console.log('✅ git configured');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
