const parseFormData = (body) => {
  const parseBody = {};

  Object.keys(body)?.map((key) => {
    try {
      parseBody[key] = JSON.parse(body[key]);
    } catch (error) {
      parseBody[key] = body[key];
    }
  });

  return parseBody;
};

module.exports = {
  parseFormData,
};
