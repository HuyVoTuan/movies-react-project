export default function moviesFilter(data, query) {
  if (!query) {
    return data;
  }

  const loweredQuery = query.toLowerCase();
  return data.filter((d) => {
    const loweredTitle = d.Title.toLowerCase();
    return loweredTitle.includes(loweredQuery);
  });
}
