import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loading: false,
        activeStep: 1
    },
    mutations: {
        activateLoading(state){
            state.loading = true
        },
        desactivateLoading(state){
            state.loading = false
        },
        nextStep(state){
            if(state.activeStep < 3) state.activeStep++
        },
        prevStep(state){
            if(state.activeStep > 1) state.activeStep--
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