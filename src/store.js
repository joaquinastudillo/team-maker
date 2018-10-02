import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loading: false,
        activeStep: 2
    },
    mutations: {
        activateLoading(state){
            state.loading = true
        },
        desactivateLoading(state){
            state.loading = false
        }
    },
    getters: {
        loadingState: state => {
            return state.loading
        },
        activatedStep: state => {
            return state.activeStep
        }
    }
})