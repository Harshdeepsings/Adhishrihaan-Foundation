/**
 * Pagination helper for Mongoose queries.
 * @param {number} page - Current page (1-indexed)
 * @param {number} limit - Items per page
 * @returns {{ skip: number, limit: number, page: number }}
 */
const paginate = (page = 1, limit = 10) => {
  const p = Math.max(1, parseInt(page));
  const l = Math.min(100, Math.max(1, parseInt(limit)));
  return {
    skip: (p - 1) * l,
    limit: l,
    page: p,
  };
};

/**
 * Build pagination metadata for API response.
 */
const paginationMeta = (total, page, limit) => {
  const totalPages = Math.ceil(total / limit);
  return {
    total,
    page,
    limit,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
};

module.exports = { paginate, paginationMeta };
