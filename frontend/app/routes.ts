import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    route("/kalatalo", "routes/header.tsx", [
        index("routes/home.tsx"),
        route("/kalatalo/me", "routes/me.tsx"),
        route("/kalatalo/research", "routes/research.tsx"),
        route("/kalatalo/papers", "routes/papers.tsx"),
        route("/kalatalo/cv", "routes/cv.tsx"),
    ])
] satisfies RouteConfig;
