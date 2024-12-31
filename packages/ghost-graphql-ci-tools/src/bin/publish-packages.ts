#!/usr/bin/env node
import * as git from '../git';
import * as npm from '../npm';

const run = async () => {
  try {
    console.log('⌛ version, git commit and push...');

    // @TODO - dynamically pull from somewhere (maybe utilize conventional commits)
    npm.version({ versionType: 'major' });
    git.commit('chore: package.json updates from workspaces publish');
    git.push();
    console.log('✅ version, git commit and push completed');
    npm.publish();
    console.log('✅ packages published');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
