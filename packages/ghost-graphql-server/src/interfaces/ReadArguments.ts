import AuthenticationArguments from './AuthenticationArguments';

export default interface ReadArguments extends AuthenticationArguments {
  id?: string;
  slug?: string;
}
