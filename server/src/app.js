import express, { json } from "express";
import userRouter from "./routes/user.router.js";
import { errorHandler } from "./errors/error.js";
import { routeError } from "./errors/route.error.js";

// import express, { json } from "express";
const app = express();
app
  .use(json())
  .use("/api/v1/users", userRouter)
  .use(routeError)
  .use(errorHandler);

export default app;
