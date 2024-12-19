import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("entrar", "routes/signin.tsx"),
  route("cadastrar-auto", "routes/signup-auto.tsx"),
  route("cadastrar-pf", "routes/signup-pf.tsx"),
] satisfies RouteConfig;
