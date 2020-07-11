import Vue from "vue";
import axios from "axios";
import VueAxios from 'vue-axios'
import { API_URL } from "@/common/config";

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
