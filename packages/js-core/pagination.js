export const v1 = (headers) => ({
  page: parseInt(headers['x-page'], 10),
  pages: parseInt(headers['x-pages'], 10),
  totalRecords: parseInt(headers['x-records'], 10),
});

export const v3 = (page) => ({
  page: parseInt(page.pageOffset, 10),
  totalRecords: parseInt(page.count, 10),
});
