import Format from './Format';

export default interface BrowseArguments {
  fields?: string[];
  filter?: string[];
  formats?: Format[];
  include?: string[];
  limit?: number;
  order?: string;
  page?: string;
}
