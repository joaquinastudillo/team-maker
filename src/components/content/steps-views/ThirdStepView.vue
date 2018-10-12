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


            <transition name="fade">
            <div class="columns" v-show="showTeams">
                <div class="column">

                    <p>Team 1</p>

                    <table class="table is-responsive">
                      <thead>
                        <tr>
                          <th>Players</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                        v-for="(player,index) in teamOne"
                        :key="index"
                        >
                          <td>{{ player.name }}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
            </transition>

            <div class="columns" v-show="showTeams">
              <div class="column">
                <span class="tag is-warning"><b>VS</b></span>
              </div>
            </div>
            
            <transition name="fade">
            <div class="columns" v-show="showTeams">
                <div class="column">

                    <p>Team 2</p>

                    <table class="table is-responsive">
                      <thead>
                        <tr>
                          <th>Players</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                        v-for="(player,index) in teamTwo"
                        :key="index"
                        >
                          <td>{{ player.name }}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
            </transition>


            <p class="buttons" v-if="showExportButton" id="justify-export-button">
              <a class="button" @click="exportData">
                <span class="icon">
                  <i class="fas fa-share-alt-square"></i>
                </span>
                <span>Display data</span>
              </a>
            </p>
            

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
      isLoading: false,
      showExportButton : false
    }
  },
  mounted() {
    this.teams = this.$store.getters.players
  },
  methods: {
    exportData(){
      this.$router.push({
        path: '/results',
        query: {
          storeData: this.$store.state,
          teamOne: this.teamOne,
          teamTwo: this.teamTwo
        }
      })
    },
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
      this.showExportButton = true
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-move {
  transition: transform 1s;
}
#justify-export-button{
  display: flex;
  justify-content: center;
}
</style>

