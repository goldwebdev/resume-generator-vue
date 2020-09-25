import Vue from 'vue';
import Vuex from 'vuex';
//import createPersistedState from 'vuex-persistedstate';
import resume from './resume';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    resume,
  },
  //plugins: [createPersistedState()],
});