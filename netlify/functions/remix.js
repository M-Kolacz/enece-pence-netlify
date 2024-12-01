import { createRequestHandler } from "@remix-run/express";
import express from "express";
import serverless from "serverless-http";

// notice that the result of `remix vite:build` is "just a module"
import * as build from "../../build/server/index.js";

const app = express();
app.use(express.static("build/client"));

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

export const handler = serverless(app)
