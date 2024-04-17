const deleteTodos = (data, id) => {
  console.log(id);
  const filter = data.filter((item) => item.id !== +id);
  return filter;
};
export { deleteTodos };
