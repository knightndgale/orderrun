// Automatically generated by declarative-routing, do NOT edit
import { z } from "zod";
import { makeRoute } from "./makeRoute";

const defaultInfo = {
  search: z.object({})
};

import * as HomeRouteRoute from "@/app/page.info";

export const HomeRoute = makeRoute(
  "/",
  {
    ...defaultInfo,
    ...HomeRouteRoute.Route
  }
);

