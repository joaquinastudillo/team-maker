<template>
            <div class="container" v-if="collectedData">
                <div class="column is-8 is-offset-2">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="@/assets/background.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content" v-if="collectedData.match">
                        <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{ collectedData.match.location }}</p>
                        </div>
                        </div>

                        <div class="content">
                        <p class="subtitle is-6">
                            {{ collectedData.match.duration }} minutes
                        </p>
                        <p>
                            Total price: {{ collectedData.match.price }}
                        </p>
                        <p class="subtitle is-6">
                            Per person: {{ priceEach }}
                        </p>
                        
                        <br>
                        
                        <div class="columns">
                            <div class="column">
                                <table class="table is-responsive">
                                    <thead>
                                        <tr>
                                        <th>Team A</th>
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
                            <div class="column">
                                <table class="table is-responsive">
                                    <thead>
                                        <tr>
                                        <th>Team B</th>
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
                        

                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>    
</template>

<script>
export default {
  name: "ResultsApp",
  data() {
    return {
      collectedData: {}
    };
  },
  mounted() {
    this.collectedData = this.$route.query.storeData;
  },
  computed: {
    priceEach() {
      return (
        this.collectedData.match.price / this.collectedData.match.players.length
      );
    },
    teamOne() {
      return this.$route.query.teamOne;
    },
    teamTwo() {
      return this.$route.query.teamOne;
    }
  }
};
</script>