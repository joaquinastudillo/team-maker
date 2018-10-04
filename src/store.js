import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loading: false,
        activeStep: 1,
        match: {
                    price: null,
                    duration: null,
                    location: null
        }
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
        },
        updateMatchPrice(state, price){
            state.match.price = price
        },
        updateMatchDuration(state, duration){
            state.match.duration = duration
        },
        updateMatchLocation(state, location){
            state.match.location = location
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