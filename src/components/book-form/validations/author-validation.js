const authorValidation = (string) => {
  const regexp = /[A-Z]/gi;
  return regexp.test(string);
};

export default authorValidation;