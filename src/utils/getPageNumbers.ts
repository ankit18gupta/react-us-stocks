const getPageNumbers = (totalPages: number) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};

export default getPageNumbers;
