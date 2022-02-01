import { UseFetch } from "./useFetch";
import { path } from "../path";
import ActivityMapper from "../../mapper/ActivityMapper";

export const getActivity = (id) => {
  console.log(path.url.userActivity(id));

  return UseFetch(path.url.userActivity(id), ActivityMapper);
};
