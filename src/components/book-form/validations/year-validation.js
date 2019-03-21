const yearValidation = (string) => {
  const regexp = /^\d{4}$/;
  return regexp.test(string);
};

export default yearValidation;