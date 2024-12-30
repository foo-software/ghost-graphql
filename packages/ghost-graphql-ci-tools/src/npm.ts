import shell from './shell';

export const publish = () => {
  shell(`npm publish`);
};

export const version = ({ versionType }: { versionType: string }) => {
  shell(`npm version ${versionType}`);
};
