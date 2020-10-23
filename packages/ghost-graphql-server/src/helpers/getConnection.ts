import camelcaseKeys from 'camelcase-keys';
import Meta from '../interfaces/Meta';

export default ({
  meta,
  nodes,
}: {
  meta: Meta;
  nodes: any[];
}) => {
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
