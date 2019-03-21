const titleValidation = (string) => {
  const regexp = /[A-Z]/gi;
  return regexp.test(string);
};

export default titleValidation;