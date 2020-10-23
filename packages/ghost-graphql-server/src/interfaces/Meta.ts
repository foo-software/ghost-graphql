export default interface Pagination {
  limit?: number;
  next?: number;
  page: number;
  pages: number;
  prev?: number;
  total: number;
}

export default interface Meta {
  pagination: Pagination;
}
