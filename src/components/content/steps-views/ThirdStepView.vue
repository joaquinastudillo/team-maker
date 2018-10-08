<template>
    <div class="step-content has-text-centered">
            <h1 class="title is-4">Generate Teams</h1>

            <div class="columns">
                <div class="column">
                    <form @submit.prevent="generate">
                    <button class="button" :class="{ 'is-loading': isLoading }" type="submit">{{ generateButton }}</button>
                    </form>
                </div>
            </div>
             
             <div class="columns" v-show="showTeams" id="dataTeams">
                <div class="column">

                    <p>Team 1</p>

                    <table class="table is-bordered">
                      <thead>
                        <tr>
                          <th><abbr title="ID">ID</abbr></th>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="player in teamOne"
                          :key="player.id"
                          >
                          <th>{{ player.id }}</th>
                          <td><strong> {{ player.name }} {{ player.surname }}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>

            <div class="columns" v-show="showTeams">
              <div class="column">
                <span class="tag is-warning"><b>VS</b></span>
              </div>
            </div>
            

            <div class="columns" v-show="showTeams" id="dataTeams">
                <div class="column">

                    <p>Team 2</p>
                    
                    <table class="table is-bordered">
                      <thead>
                        <tr>
                          <th><abbr title="ID">ID</abbr></th>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="player in teamTwo"
                          :key="player.id"
                          >
                          <th>{{ player.id }}</th>
                          <td><strong> {{ player.name }} {{ player.surname }}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>

    </div>
</template>

<script>
export default {
  name: "ThirdStepAppView",
  data() {
    return {
      showTeams: false,
      teams: [],
      generateButton: 'Generate Teams',
      isLoading: false
    }
  },
  mounted() {
    this.teams = this.$store.getters.players
  },
  methods: {
    generate() {
      this.isLoading = true
      let counter = this.teams.length
      let temporalValue
      let index

      while (counter > 0) {
        index = Math.floor(Math.random() * counter)
        counter--
        temporalValue = this.teams[counter]
        // Due to limitations in Javascript, Vue cannot detect changes in arrays
        // so those lines have been changed according to the official Vue documentation
        // I'll leave them here just to remind me in the future

        //this.teams[counter] = this.teams[index]
        this.$set(this.teams, counter, this.teams[index])
        //this.teams[index] = temporalValue
        this.$set(this.teams, index, temporalValue)
      }
      this.showTeams = true
      this.isLoading = false
      this.generateButton = 'Re Generate Teams'
    }
  },
  computed : {
    teamOne(){
      return this.teams.slice(0, Math.ceil(this.teams.length / 2))
    },
    teamTwo(){
      return this.teams.slice((this.teams.length/2), Math.ceil(this.teams.length))
    },

  }
}
</script>

<style>
.teams-container-enter-active {
  animation: bounce-in 0.5s;
}
.teams-container-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

