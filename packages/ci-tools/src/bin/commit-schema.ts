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
    if (error.message.includes('No staged files found')) {
      process.exit();
    }
    console.error(error);
    process.exit(1);
  }
};

run();
