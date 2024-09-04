import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  return "Hello Leandro Vidal";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP is running in this port Leandro Vidal");
  });
