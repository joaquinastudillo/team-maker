<template>
    <div>
        <div class="step-content has-text-centered">
            <h1 class="title is-4">Match Information</h1>
        </div>
        <div class="step-content has-text-centered">
            

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                <label class="label">Price</label>
                </div>
                <div class="field-body">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" 
                            name="price" 
                            id="price" 
                            type="number" 
                            placeholder="amount" 
                            required
                            v-model="price"
                        >
                        <span class="icon is-small is-left">
                        <i class="fas fa-dollar-sign"></i>
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
                <label class="label">Minutes</label>
                </div>
                <div class="field-body">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input 
                            class="input" 
                            type="number" 
                            name="duration" 
                            id="duration" 
                            placeholder="quantity" 
                            required
                            v-model="duration"
                        >
                        <span class="icon is-small is-left">
                        <i class="fas fa-stopwatch"></i>
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
                <label class="label">Location</label>
                </div>
                <div class="field-body">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input 
                            class="input" 
                            type="text" 
                            name="location" 
                            id="location" 
                            placeholder="court name" 
                            required
                            v-model="location"
                        >
                        <span class="icon is-small is-left">
                        <i class="fas fa-map-marker-alt"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'firstStepAppView',
        computed: {
            price: {
                get(){
                    return this.$store.state.match.price
                },
                set(value){
                    this.$store.commit('updateMatchPrice', value)
                }
            },
            duration: {
                get(){
                    return this.$store.state.match.duration
                },
                set(value){
                    this.$store.commit('updateMatchDuration', value)
                }
            },
            location: {
                get(){
                    return this.$store.state.match.location
                },
                set(value){
                    this.$store.commit('updateMatchLocation', value)
                }
            }
        }
    }
</script>