import shell from './shell';

export const publish = () => {
  shell(
    `lerna publish --cd-version=patch --yes --message 'chore: lerna publish (skip ci)'`
  );
};
