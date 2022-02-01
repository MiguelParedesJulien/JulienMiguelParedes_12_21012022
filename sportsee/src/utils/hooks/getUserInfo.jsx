import { UseFetch } from "./useFetch";
import { path } from "../path";
import UserMapper from "../../mapper/userMapper";

export const getUserInfo = (id) => {
  console.log(path.url.infoUser(id));

  return UseFetch(path.url.infoUser(id), UserMapper);
};
