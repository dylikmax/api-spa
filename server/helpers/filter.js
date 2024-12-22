const filterByQuery = (array, query) => {
  const strictFilters = [],
    likeFilters = [];
  Object.keys(query).forEach((key) => {
    key.endsWith("_like") ? likeFilters.push(key.slice(0, -5)) : strictFilters.push(key);
  });

  return array.filter(
    (el) =>
      strictFilters.every((filter) => el[filter] == query[filter]) &&
      likeFilters.every((filter) => el[filter].toString().includes(query[`${filter}_like`]))
  );
};

module.exports = filterByQuery;