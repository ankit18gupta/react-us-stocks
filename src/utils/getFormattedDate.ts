const getFormattedDate = (dateString: string) => {
  const dateObject = new Date(dateString);
  const month = dateObject.toLocaleString("en-US", { month: "long" });
  const year = dateObject.getFullYear();
  const formattedDate = `${month} ${dateObject.getDate()}, ${year}`;
  return formattedDate;
};

export default getFormattedDate;
