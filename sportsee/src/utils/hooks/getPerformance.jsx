import { UseFetch } from "./useFetch";
import { path } from "../path";
import PerformanceMapper from "../../mapper/performanceMapper";

export const getPerformance = (id) => {
  console.log(path.url.userPerformance(id));

  return UseFetch(path.url.userPerformance(id), PerformanceMapper);
};
