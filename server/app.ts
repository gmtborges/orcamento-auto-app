import { Hono } from "hono"
import { logger } from "hono/logger";
import { routes as orcamentosRoute } from "./routes/orcamentos";
import { serveStatic } from "hono/bun";

const app = new Hono();
app.use(logger())

const apiPath = app.basePath("api")
apiPath.route("/orcamentos", orcamentosRoute)

app.get("*", serveStatic({ root: "./frontend/dist" }))
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }))

export default app;
