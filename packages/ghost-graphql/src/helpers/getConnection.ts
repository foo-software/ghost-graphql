import camelcaseKeys from 'camelcase-keys';
import MetaInterface from '../interfaces/Meta';

export default ({ meta, nodes }: { meta: MetaInterface; nodes: any[] }) => {
  return {
    edges: nodes.map((node: any) => ({
      // cursor (someday?)
      node: camelcaseKeys(node, { deep: true }),
    })),
    meta,
    pageInfo: {
      hasNextPage: !!meta.pagination.next,
      hasPreviousPage: !!meta.pagination.prev,
    },
  };
};
