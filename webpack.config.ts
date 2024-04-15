import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { IBuildPaths, IEnvVariables } from "./config/build/types/types";

export default (env: IEnvVariables) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),

  };

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? "development",
    port: env.port ?? 3000,
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? 'desktop',
    paths,
  });
  return config;
};
