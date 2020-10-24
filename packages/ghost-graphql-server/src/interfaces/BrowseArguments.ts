enum Format {
  html = 'html',
  plaintext = 'plaintext',
}

export default interface BrowseArguments {
  fields?: string[];
  filter?: string[];
  formats?: Format[];
  include?: string[];
  limit?: number;
  order?: string;
  page?: string;
}
