import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import routes from "./connect";

export async function mainServer() {
    const server = fastify();
    await server.register(fastifyConnectPlugin, {
        routes,
    });
    server.get("/", (_, reply) => {
        reply.type("text/plain");
        reply.send("Hello World!");
    });
    await server.listen({ host: "localhost", port: 8080 });
    console.log("server is listening at", server.addresses());
}
