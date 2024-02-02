export const parseRequestBody = (requestString: string) => {
  return requestString.replace(" ", "%20");
};
