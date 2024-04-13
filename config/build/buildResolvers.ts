import { Configuration } from "webpack";

export function buildResolvers(): Configuration['resolve'] {
    return {
        extensions: [".tsx", ".ts", ".js"], // Параметр, который позволяет не указывать расширения при исмпортах
    }
}