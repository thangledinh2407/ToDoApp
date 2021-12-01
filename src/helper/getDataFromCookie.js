import Cookie from "js-cookie";

export function getListTask() {
  const TASK_LIST = Cookie.get("TASK_LIST");

  if (TASK_LIST) {
    return JSON.parse(TASK_LIST);
  }

  return [];
}
