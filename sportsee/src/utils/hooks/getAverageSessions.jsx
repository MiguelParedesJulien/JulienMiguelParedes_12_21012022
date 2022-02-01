import { UseFetch } from "./useFetch";
import { path } from "../path";
import AverageSessionsMapper from "../../mapper/AverageSessionsMapper";

export const getAverageSession = (id) => {
  console.log(path.url.userAverageSession(id));

  return UseFetch(path.url.userAverageSession(id), AverageSessionsMapper);
};
