import dataSources from '../datasources';

export default interface ResolverContext {
  dataSources: ReturnType<typeof dataSources>;
}
