#!/usr/bin/env node
import * as git from '../git';

const run = async () => {
  try {
    console.log('⌛ configuring git...');
    git.config();
    console.log('⌛ git commit...');
    git.add();
    git.commit('chore: generate schema');
    console.log('✅ schema committed');
  } catch (error) {
    console.error(error);
    console.log('message', error.message);
    process.exit(1);
  }
};

run();
