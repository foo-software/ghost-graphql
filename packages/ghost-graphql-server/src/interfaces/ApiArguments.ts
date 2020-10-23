enum Format {
  html = 'html',
  plaintext = 'plaintext',
}

export default interface ApiArguments {
  fields?: string[];
  filter?: string[];
  formats?: Format[];
  include?: string[];
  key?: string;
  limit?: number;
  order?: string;
  page?: string;
}
