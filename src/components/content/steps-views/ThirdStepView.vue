<template>
    <div class="step-content has-text-centered">
            <h1 class="title is-4">Generate Teams</h1>

            <div class="columns">
                <div class="column">
                    <form @submit.prevent="generate">
                    <input type="submit">
                    </form>
                </div>
            </div>

            <div class="columns" v-show="showTeams" id="dataTeams">
                <div class="column">
                    <ul>
                        <li
                        v-for="player in teams"
                        :key="player.id"
                        >
                        {{ player.id }} - {{ player.name }} - {{ player.surname }}
                        </li>
                    </ul>
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
      teams: []
    }
  },
  mounted() {
    this.teams = this.$store.getters.players
  },
  methods: {
    generate() {
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
      this.showTeams = true;
    }
  }
}
</script>
