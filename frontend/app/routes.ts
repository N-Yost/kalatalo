import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    route("/", "routes/header.tsx", [
        index("routes/home.tsx"),
        route("/me", "routes/me.tsx"),
        route("/research", "routes/research.tsx"),
        route("/papers", "routes/papers.tsx"),
        route("/cv", "routes/cv.tsx"),
    ]),
] satisfies RouteConfig;
