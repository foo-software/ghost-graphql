import shell from './shell';

const { PERSONAL_ACCESS_TOKEN: TOKEN } = process.env;

const GIT_URL = `https://foo-software-bot:${TOKEN}@github.com/foo-software/foo`;

export const config = () => {
  shell('git config --global user.email notifications@foo.software');
  shell('git config --global user.name Foo Bot');
};

export const checkout = (branch: string = 'master') => {
  shell(`git remote set-url origin ${GIT_URL}`);
  shell('git fetch');
  shell(`git checkout ${branch} && git pull`);
};

export const add = () => {
  shell('git add .');
};

export const commit = (message: string) => {
  shell(`git remote set-url origin ${GIT_URL}`);
  shell('git fetch');
  shell(`git commit -am '${message} (skip ci)'`);
};
