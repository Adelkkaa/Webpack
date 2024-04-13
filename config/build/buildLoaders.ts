import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { IOptions } from "./types/types";

export function buildLoaders(options: IOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      esModule: false, // Добавляем это свойство для того, чтобы дефолтный импорт работал import classname from './что-то/Что-то.module.scss'
      modules: {
        auto: (resPath: string) => Boolean(resPath.includes(".module.")), // Добавляем этот параметр для того, чтобы обычные стили по типу New.scss работали и применялись, если так не сделать, cssLoader будет просто выполнять преобразования и классы не будут применяться
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/, // Формат расширения файла подходящий для этого loader
    use: "ts-loader", // Название лоадера для этой регулярки
    exclude: /node_modules/, // Файлы которые исключаем
  };

  return [scssLoader, tsLoader];
}
