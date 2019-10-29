import Vue from 'vue';
import Vuex from 'vuex';
import states from './states';
import createPersistedState from 'vuex-persistedstate';
import mutations from './mutations';
import actions from './actions';
import getters from './getters'

const state ={
    ...states
}
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    plugins:[createPersistedState({
        storage: window.sessionStorage
    })]
})