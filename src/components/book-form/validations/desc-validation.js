const descValidation = (string) => {
  const regexp = /[A-Z]/gi;
  return regexp.test(string);
};

export default descValidation;