import { fastify } from "fastify";
import { fastifySwagger} from "fastify-swagger";
import { AttractionResponseJsonSchema, ParkResponseJsonSchema } from "./schema/schema";

const BaseURL = "/api/";

const app = fastify({
    logger: true,
    ignoreTrailingSlash: true,
});

app.register(fastifySwagger, {
    routePrefix: "/documentation",
    swagger: {
      info: {
        title: "Cecklist",
        description: "API for acces data from database of ski resort",
        version: "0.1.0",
      },
      host: "localhost:9090",
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
    exposeRoute: true,
  });

  app.get(
    `${BaseURL}park/:parkId`,
    {
      schema: ParkResponseJsonSchema,
    },
    async (req, reply) => {}
  );

  app.get(
    `${BaseURL}/:parkId/attraction/:attractionId`,
    {
      schema: AttractionResponseJsonSchema,
    },
    async (req, reply) => {}
  );

  app.listen(9090, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
