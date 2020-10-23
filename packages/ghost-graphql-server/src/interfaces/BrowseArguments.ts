import AuthenticationArguments from './AuthenticationArguments';

enum Format {
  html = 'html',
  plaintext = 'plaintext',
}

export default interface BrowseArguments extends AuthenticationArguments {
  fields?: string[];
  filter?: string[];
  formats?: Format[];
  include?: string[];
  key?: string;
  limit?: number;
  order?: string;
  page?: string;
}
