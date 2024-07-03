import { hc } from "hono/client";
import type { AppType } from "server";

export const client = hc<AppType>("http://localhost:8080");
