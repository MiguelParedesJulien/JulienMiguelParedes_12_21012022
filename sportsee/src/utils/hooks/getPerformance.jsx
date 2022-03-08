import { UseFetch } from "./useFetch";
import { path } from "../path";
import PerformanceMapper from "../../mapper/performanceMapper";

/**
 * hook which fetch user performance
 * @param {string} id of user id
 * @returns {object} data, error
 */
export const getPerformance = (id) => {
  return UseFetch(path.url.userPerformance(id), PerformanceMapper);
};
