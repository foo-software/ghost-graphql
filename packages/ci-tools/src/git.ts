import Git from 'git-commands';

const { PERSONAL_ACCESS_TOKEN: TOKEN } = process.env;

const GIT_URL = `https://foo-software-bot:${TOKEN}@github.com/foo-software/ghost-graphql`;
const git = new Git({ reps: GIT_URL });

export const config = () => {
  console.log(git.command('checkout master'));
  console.log(
    git.command('config --global user.email notifications@foo.software')
  );
  console.log(git.command('config --global user.name Foo Bot'));
};

export const checkout = (branch: string = 'master') => {
  console.log(git.command('fetch'));
  console.log(git.command(`checkout ${branch} && git pull`));
};

export const add = () => {
  console.log(git.command('add .'));
};

export const commit = (message: string) => {
  console.log(git.command(`commit -am '${message} (skip ci)'`));
};
