export const API_KEY = process.env.GHOST_API_KEY;
export const API_VERSION = process.env.GHOST_API_VERSION || 'v3';
export const API_URL =
  process.env.GHOST_API_URL ||
  `${process.env.GHOST_URL}/ghost/api/${API_VERSION}/content`;
export const SHOULD_LOG_API_URL =
  process.env.GHOST_SHOULD_LOG_API_URL === 'true';
export const SHOULD_LOG_HTTP_REQUESTS =
  process.env.GHOST_SHOULD_LOG_HTTP_REQUESTS === 'true';
