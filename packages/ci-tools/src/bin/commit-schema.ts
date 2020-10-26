#!/usr/bin/env node
import * as git from '../git';

const run = async () => {
  try {
    git.config();
    git.add();
    git.commit('chore: generate schema');
    console.log('✅ schema committed');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
