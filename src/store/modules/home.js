import { GithubService } from "@/common/api.service";

// initial state
const state = () => ({
  repos: [],
  reposCount: 0,
  isLoading: true
})

const getters = {
  repos(state) {
    return state.repos;
  },
  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  getAllRepos({ commit }, term) {
    commit('fetchStart');
    return GithubService.get(term)
      .then(({ data }) => {
        commit('fetchEnd', data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

const mutations = {
  fetchStart(state) {
    state.isLoading = true;
  },
  fetchEnd(state, data) {
    state.repos = data.items;
    state.reposCount = data.total_count;
    state.isLoading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
