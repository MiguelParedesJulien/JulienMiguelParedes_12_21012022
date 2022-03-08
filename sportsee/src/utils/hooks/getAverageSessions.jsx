import { UseFetch } from "./useFetch";
import { path } from "../path";
import AverageSessionsMapper from "../../mapper/averageSessionsMapper";

/**
 * hook which fetch user average session
 * @param {string} id of user id
 * @returns {object} data, error
 */
export const getAverageSession = (id) => {
  return UseFetch(path.url.userAverageSession(id), AverageSessionsMapper);
};
