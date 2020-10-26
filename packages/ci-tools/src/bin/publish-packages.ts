#!/usr/bin/env node
import * as lerna from '../lerna';

const run = async () => {
  try {
    console.log('⌛ lerna publish...');
    lerna.publish();
    console.log('✅ packages published');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
