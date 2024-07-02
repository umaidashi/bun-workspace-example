import { Hono } from "hono";

const app = new Hono();

const routes = app.get("/", (c) => {
	return c.text("Hello Hono!");
});

export default {
	fetch: app.fetch,
	port: 8080,
};

export type AppType = typeof routes;