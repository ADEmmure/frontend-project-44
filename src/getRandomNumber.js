const getRandomNumber = (first, last) => {
  const result = Math.ceil(Math.random() * (last - first)) + first;
  return result;
};

export default getRandomNumber;
