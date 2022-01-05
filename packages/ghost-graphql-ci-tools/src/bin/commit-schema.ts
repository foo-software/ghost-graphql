#!/usr/bin/env node
import * as git from '../git';

const run = async () => {
  try {
    console.log('⌛ git commit...');
    git.add();
    git.commit('chore: generate schema');
    git.push();
    console.log('✅ schema committed');
  } catch (error) {
    if (
      error instanceof Error &&
      (error.message.includes('No staged files found') ||
        error.message.includes('nothing to commit'))
    ) {
      process.exit();
    }
    console.error(error);
    process.exit(1);
  }
};

run();
