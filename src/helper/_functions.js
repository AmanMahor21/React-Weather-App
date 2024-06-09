// GET DYNAMIC ICON
const getIconUrl = (iconCode) => {
  try {
    return require(`../assests/icons/${iconCode}.svg`);
  } catch (error) {
    return null;
  }
};

// GET DATE
const getDate = (data) => {
  const date = new Date();
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat(
    "en-US",
    data === "date" ? dateOptions : timeOptions
  ).format(date);
  return formattedDate;
};

export { getDate, getIconUrl };
