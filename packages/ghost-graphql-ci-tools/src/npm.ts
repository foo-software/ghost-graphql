import shell from './shell';

export const publish = () => {
  shell(
    `npm publish --workspace=@foo-software/ghost-graphql --workspace=@foo-software/ghost-graphql-server `
  );
};

export const version = ({ versionType }: { versionType: string }) => {
  shell(
    `npm version ${versionType} --workspaces --include-workspace-root --message 'chore: tag % (skip ci)'`
  );
};
