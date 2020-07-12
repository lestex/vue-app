import Vue from "vue";
import axios from "axios";
import VueAxios from 'vue-axios'
import { API_URL } from "@/common/";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  get(resource, params = "") {
    return Vue.axios.get(`${resource}?${params}`).catch(error => {
      throw new Error(`ApiService error: ${error}`);
    });
  }
};

export default ApiService;

export const GithubService = {
  get(term) {
    return ApiService.get('repositories', `sort=stars&order=desc&q=${term}+language:python`);
  }
};
