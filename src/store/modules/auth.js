import TokenService from "@/common/token.service";

// initial auth state
const state = () => ({
  user: {},
  isAuthenticated: !!TokenService.getToken()
})

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  userLogin({ commit }, email) {
    commit('setAuth', email);
  },
  userLogout(context) {
    context.commit('unsetAuth');
  }
};

const mutations = {
  setAuth(state, email) {
    console.log(email)
    state.isAuthenticated = true;
    state.user = email;
    TokenService.saveToken(email);
  },
  unsetAuth(state) {
    state.isAuthenticated = false;
    state.user = {};
    TokenService.deleteToken();
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
