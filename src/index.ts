import { doGet } from "./app/main";

declare const global: {
  [x: string]: unknown;
};

global.doGet = doGet;
