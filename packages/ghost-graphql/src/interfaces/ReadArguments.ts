import Format from './Format';

export default interface ReadArguments {
  fields?: string[];
  id?: string;
  formats?: Format[];
  include?: string[];
  slug?: string;
}
