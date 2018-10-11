import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loading: false,
    activeStep: 1,
    match: {
      price: null,
      duration: null,
      location: null,
      //players: [{"id":4,"name":"leo","surname":"muñoz"},{"id":8,"name":"ignacio","surname":"ortega"},{"id":3,"name":"rodrigo","surname":"muñoz"},{"id":2,"name":"joaquin","surname":"astudillo"},{"id":5,"name":"diego","surname":"oñate"},{"id":10,"name":"leo","surname":"figueroa"},{"id":9,"name":"esteban","surname":"re-bufel"},{"id":7,"name":"martin","surname":"mujica"},{"id":1,"name":"rodrigo","surname":"cretier"},{"id":6,"name":"maxi","surname":"mujica"}]
      players: []
    },
    playerIdCounter: 1
  },
  mutations: {
    activateLoading(state) {
      state.loading = true;
    },
    desactivateLoading(state) {
      state.loading = false;
    },
    nextStep(state) {
      if (state.activeStep < 3) state.activeStep++;
    },
    prevStep(state) {
      if (state.activeStep > 1) state.activeStep--;
    },
    updateMatchPrice(state, price) {
      state.match.price = price;
    },
    updateMatchDuration(state, duration) {
      state.match.duration = duration;
    },
    updateMatchLocation(state, location) {
      state.match.location = location;
    },
    addPlayer(state, payload) {
      state.match.players.push({
        id: this.state.playerIdCounter++,
        name: payload.playerName
      });
    },
    updatePlayers(state, payload) {
      state.match.players = payload;
    },
    updatePlayersBytext(state, payload) {
      let counter = 0;
      if (Array.isArray(payload)) {
        payload.forEach(element => {
          Vue.set(state.match.players, counter, {
            id: counter,
            name: element
          });
          counter++;
        });
      }
    },
    deletePlayer(state, payload){
        state.match.players.splice(payload, 1)
    }
  },
  getters: {
    loadingState: state => {
      return state.loading;
    },
    activatedStep: state => {
      return state.activeStep;
    },
    players: state => {
      return state.match.players;
    },
    randomTeams: state => {
      let players = state.match.players;
      let counter = players.length;
      let temporalValue;
      let index;

      while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temporalValue = players[counter];
        players[counter] = players[index];
        players[index] = temporalValue;
      }

      return players;
    },
    location: state => {
      return state.match.location;
    },
    price: state => {
      return state.match.price;
    },
    duration: state => {
      return state.match.duration;
    }
  }
});
