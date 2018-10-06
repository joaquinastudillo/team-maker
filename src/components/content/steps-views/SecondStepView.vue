<template>
        <div class="step-content has-text-centered">

            <div class="container">
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
            </div>

            <h1 class="title is-4">Players Information</h1>

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

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                <label class="label">Surname</label>
                </div>
                <div class="field-body">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input 
                            class="input" 
                            name="surname" 
                            id="surname" 
                            type="surname" 
                            placeholder="player surname" 
                            required
                            v-model="player.playerSurname"
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
                <button class="button">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            </form>

            <div class="container">
                <section class="section">
                        <article class="media"
                        v-for="(player, index) in players"
                        :key="index"
                        id="playerDisplay"
                        >   
                            #{{ index+1 }}
                            <figure class="media-left">
                                <p class="image is-64x64">
                                    <i class="fas fa-futbol fa-3x"></i>
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                <p>
                                    <strong id="playersName">{{ player.name}} {{ player.surname }}</strong>
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
                </section>    
            </div>
        </div>
</template>

<script>
    export default {
        name: 'SecondStepViewApp',
        data(){
            return {
                player: {
                    playerName: null,
                    playerSurname: null
                }
            }
        },
        computed: {
            players: {
                get(){
                    return this.$store.getters.players
                }
            },
            location: {
                get(){
                    return this.$store.getters.location
                }
            },
            duration: {
                get(){
                    return this.$store.getters.duration
                }
            },
            price: {
                get(){
                    return this.$store.getters.price
                }
            }
            
        },
        methods: {
            addPlayer(){
                this.$store.commit('addPlayer', this.player)
                this.player.playerName = '',
                this.player.playerSurname = ''
            },
            deletePlayer(index){
                this.players.splice(index, 1)
            }
        }
    }
</script>


<style>
    #addButton{
        display: flex;
        justify-content: flex-end;
    }
    #playerDisplay{
        height: 70px;
        padding: 15px;
        background-color: #41b883;
        color: white;
        border-radius: 7px;
    }
    #playersName{
        color:white;
        text-transform: uppercase;
    }
</style>
