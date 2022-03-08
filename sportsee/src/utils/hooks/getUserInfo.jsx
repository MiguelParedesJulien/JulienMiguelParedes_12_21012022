import { UseFetch } from "./useFetch";
import { path } from "../path";
import UserMapper from "../../mapper/userMapper";

/**
 * hook which fetch user infos
 * @param {string} id of user id
 * @returns {object} data, error
 */
export const getUserInfo = (id) => {
  return UseFetch(path.url.infoUser(id), UserMapper);
};
