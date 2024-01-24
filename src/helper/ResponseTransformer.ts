export const ResponseTransformer = (res) => {
  if (res) {
    return res?.data;
  }
};
