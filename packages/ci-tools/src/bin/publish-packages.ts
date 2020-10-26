#!/usr/bin/env node
import * as git from '../git';
import * as lerna from '../lerna';

const run = async () => {
  try {
    console.log('⌛ configuring git...');
    git.config();
    console.log('⌛ git checkout...');
    git.checkout();
    console.log('⌛ lerna publish...');
    lerna.publish();
    console.log('✅ packages published');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
