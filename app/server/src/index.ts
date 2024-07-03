import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { z } from "zod";

const app = new Hono();

const routes = app
	.use("/*", cors())
	.get("/api", (c) => {
		return c.json({ message: "Hello Hono!" });
	})
	.post(
		"/api",
		zValidator(
			"json",
			z.object({
				name: z.string(),
			}),
		),
		(c) => {
			const { name } = c.req.valid("json");
			return c.json({ message: `Hello ${name}!` });
		},
	);

export default {
	fetch: app.fetch,
	port: 8080,
};

export type AppType = typeof routes;
