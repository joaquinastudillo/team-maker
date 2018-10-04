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
                    <div class="control">
                    <input 
                    class="input" 
                    name="price" 
                    id="price" 
                    type="number" 
                    placeholder="$" 
                    required
                    v-model="price"
                    >
                    </div>
                </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                <label class="label">Duration in min</label>
                </div>
                <div class="field-body">
                <div class="field">
                    <div class="control has-icon has-icon-right">
                    <input 
                    class="input" 
                    type="number" 
                    name="duration" 
                    id="duration" 
                    placeholder="minutes" 
                    required
                    v-model="duration"
                    >
                    </div>
                </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                <label class="label">Location</label>
                </div>
                <div class="field-body">
                <div class="field">
                    <div class="control has-icon has-icon-right">
                    <input 
                    class="input" 
                    type="text" 
                    name="location" 
                    id="location" 
                    placeholder="ej: la tia" 
                    required
                    v-model="location"
                    >
                    </div>
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