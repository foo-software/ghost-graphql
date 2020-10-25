export enum FormatType {
  html = 'html',
  plaintext = 'plaintext',
}

export default interface BrowseArguments {
  fields?: string[];
  filter?: string[];
  formats?: FormatType[];
  include?: string[];
  limit?: number;
  order?: string;
  page?: string;
}
