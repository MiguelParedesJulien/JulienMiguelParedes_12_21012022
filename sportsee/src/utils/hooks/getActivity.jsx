import { UseFetch } from "./useFetch";
import { path } from "../path";
import ActivityMapper from "../../mapper/activityMapper";

/**
 * hook which fetch user activity
 * @param {string} id of user id
 * @returns {object} data, error
 */
export const getActivity = (id) => {
  return UseFetch(path.url.userActivity(id), ActivityMapper);
};
