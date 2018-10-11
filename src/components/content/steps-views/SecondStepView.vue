<template>
        <div class="step-content has-text-centered">

            <div class="card">
                            <div class="card-content">
                                <p class="subtitle">
                                    <i class="fas fa-map-marker-alt"></i> {{ location }}
                                </p>
                            </div>
                            <footer class="card-footer">
                                <a class="card-footer-item">Price: {{ price }}</a> 
                                <a class="card-footer-item general-link">Duration: {{ duration }} min</a>
                            </footer>
            </div>

            <h1 class="title is-4">Players Information</h1>

            <form @submit.prevent="loadFromText">

            <div class="field is-horizontal">
                <div class="field-label is-normal is-centered-flex">
                    <div class="control" id="">
                        <button type="submit" class="button paginator">
                            <i class="fas fa-upload"></i>
                        </button>
                    </div>
                </div>
                <div class="field-body">
                <div class="field">
                    <p class="control">
                        <textarea 
                        class="textarea" 
                        placeholder="paste the list of players" 
                        rows="10"
                        v-model="textAreaData"
                    >
                    </textarea>
                    </p>
                </div>
                </div>
            </div>
            </form>

            <br>

            <form @submit.prevent="addPlayer">

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                <label class="label">Name</label>
                </div>
                <div class="field-body">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input 
                            class="input" 
                            name="name" 
                            id="name" 
                            type="name" 
                            placeholder="player name" 
                            required
                            v-model="player.playerName"
                        >
                        <span class="icon is-small is-left">
                        <i class="fas fa-signature"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                </div>
            </div>

            <div class="control" id="addButton">
                <button class="button paginator">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            </form>

            <br>
            
            <transition-group name="players-container">
            <article class="media playerDisplay"
                        v-for="(player, index) in players"
                        :key="player.id"
                        >   
                            #{{ index + 1 }}
                            <figure class="media-left">
                                <p class="image is-64x64">
                                    <i class="fas fa-futbol fa-3x"></i>
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                <p>
                                    <strong class="playersName">{{ player.name }}</strong>
                                </p>
                                </div>
                                <nav class="level is-mobile">
                                <div class="level-left">
                                    <!--<a class="level-item">
                                    <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                    </a>-->
                                </div>
                                </nav>
                            </div>
                            <div class="media-right">
                                <button class="delete" @click="deletePlayer(index)"></button>
                            </div>
            </article>
            </transition-group>
        </div>
</template>

<script>
export default {
  name: "SecondStepViewApp",
  data() {
    return {
      player: {
        playerName: null,
      },
      textAreaData: '',
      loadData: []
    };
  },
  computed: {
    players: {
      get() {
        return this.$store.getters.players;
      },
      set(newValue){
        this.$store.commit('updatePlayersBytext', newValue)   
      }
    },
    location: {
      get() {
        return this.$store.getters.location;
      }
    },
    duration: {
      get() {
        return this.$store.getters.duration;
      }
    },
    price: {
      get() {
        return this.$store.getters.price;
      }
    }
  },
  methods: {
    addPlayer() {
      this.$store.commit("addPlayer", this.player);
      this.player.playerName = ""
    },
    deletePlayer(index) {
      this.$store.commit('deletePlayer', index)
    },
    loadFromText(){
        const tempArray = this.textAreaData.split('\n')
        let beginningArray = tempArray.indexOf("...")
        let endArray = tempArray.indexOf("...", beginningArray + 1) 

        this.loadData = tempArray.slice(beginningArray + 1, endArray)

        let counter = 0
        this.loadData.forEach(element => {
          this.$set(this.players, counter, {
            id: counter,
            name: element
          });
          counter++;
        });
        console.log(this.players)
    }
  }
};
</script>


<style>
#addButton {
  display: flex;
  justify-content: flex-end;
}
.playerDisplay {
  height: 70px;
  padding: 15px;
  background-color: #41b883;
  color: white;
  border-radius: 7px;
  transition: all 0.5s ease-out;
}

.playerDisplay:hover{
    transform: scale(1.05);
}

.playersName {
  color: white;
  text-transform: uppercase;
}

.players-container-enter-active {
  animation: bounce-in 0.5s;
}
.players-container-leave-active {
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

.is-centered-flex{
    display: flex;
    justify-content: center;
}
</style>
