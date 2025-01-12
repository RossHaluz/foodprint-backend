const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "API Documentation for AudiParts",
  },
  servers: [
    {
      url: "https://api.audiparts.site",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./docs/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
