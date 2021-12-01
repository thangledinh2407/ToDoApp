import Cookies from "js-cookie";

import { getListTask } from "../../helper/getDataFromCookie";

const state = {
  listTask: getListTask(),
};

const mutations = {
  SET_NEW_TASK: (state, newTask) => {
    state.listTask.push(newTask);
    Cookies.set("TASK_LIST", state.listTask);
  },

  DELETE_TASK: (state, index) => {
    let listTask = state.listTask;

    listTask.splice(index, 1);

    Cookies.set("TASK_LIST", state.listTask);
  },

  UPDATE_TITLE_TASK: (state, task) => {
    let index = task.index;
    let title = task.title;

    state.listTask[index].title = title;

    Cookies.set("TASK_LIST", state.listTask);
  },
};

const actions = {
  setNewTask({ commit }, newTask) {
    commit("SET_NEW_TASK", newTask);
  },
  deleteTask({ commit }, index) {
    commit("DELETE_TASK", index);
  },
  updateTask({ commit }, task) {
    commit("UPDATE_TITLE_TASK", task);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
