import shell from 'shelljs';

export default (command: string) => {
  const result = shell.exec(command);
  const isGrep = command.includes('grep');

  // for some reason grep commands can return exit code `123`
  // when nothing was returned (and everything is fine)
  if (result.code !== 0 && (!isGrep || result.code !== 123)) {
    throw Error(result.stderr);
  }

  return result.stdout;
};
