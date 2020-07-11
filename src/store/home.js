import { GithubService } from "@/common/api.service";
import { FETCH_REPOS } from "./actions.type";
import {
  FETCH_START,
  FETCH_END
} from "./mutations.type";

const state = {
  repos: [],
  isLoading: true
};

const getters = {
  repos(state) {
    return state.repos;
  },
  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  [FETCH_ARTICLES]({ commit }, params) {
    commit(FETCH_START);
    return GithubService.get(params.type, params.filters)
      .then(({ data }) => {
        commit(FETCH_END, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, { repos }) {
    state.repos = repos;
    state.isLoading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
