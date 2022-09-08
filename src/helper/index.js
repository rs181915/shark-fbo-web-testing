export const redirect = (navigate, path) => {
  window.scrollTo(0, 0);
  navigate(path);
};
