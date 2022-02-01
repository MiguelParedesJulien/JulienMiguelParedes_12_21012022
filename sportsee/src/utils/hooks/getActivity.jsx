import { UseFetch } from "./useFetch";
import { path } from "../path";
import ActivityMapper from "../../mapper/activityMapper";

export const getActivity = (id) => {
  console.log(path.url.userActivity(id));

  return UseFetch(path.url.userActivity(id), ActivityMapper);
};
