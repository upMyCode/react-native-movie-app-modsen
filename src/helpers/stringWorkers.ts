const filmDescriptionChecker = (description: string) => {
  if (description.length > 200) {
    return { description: `${description.slice(0, 200)}...`, isShorted: true };
  }
  return { description, isShorted: false };
};

export default filmDescriptionChecker;
