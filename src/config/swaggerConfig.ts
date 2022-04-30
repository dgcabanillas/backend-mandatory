
import swaggerJsDoc from "swagger-jsdoc";

export const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Favs basic api rest",
      version: "1.0.0",
      description: "backend mandatory assesment",
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: "local server",
      },
    ],
  },

  apis: ["./src/docs/*.yaml"]
};

export const swaggerSpecs = swaggerJsDoc(options);
