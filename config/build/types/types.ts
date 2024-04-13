export type IBuildPaths = {
  entry: string;
  html: string;
  output: string;
};

export type IBuildMode = "production" | "development";

export type IEnvVariables = {
  mode: IBuildMode;
  port: number;
  analyzer?: boolean;
};

export type IOptions = {
  port: number;
  paths: IBuildPaths;
  mode: IBuildMode;
  analyzer?: boolean;
};
