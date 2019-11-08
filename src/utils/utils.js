const getTimeAndData = unparsedTime => {
  const jobDate = new Date(unparsedTime);

  return `${jobDate.getDate()}/${jobDate.getDay()}/${jobDate.getFullYear()} ${jobDate.getHours()}:${jobDate.getMinutes()}`;
};

export { getTimeAndData };
