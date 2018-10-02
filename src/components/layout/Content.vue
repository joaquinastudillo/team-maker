<template>
    <div>
        <loading-app :active="loadingState" :is-full-screen="true"></loading-app>
        <router-view></router-view>
    </div>
</template>

<style>

#main-title{
    color: white;
}

</style>

<script>

import VueElementLoading from 'vue-element-loading'

    export default {
        name: 'ContentApp',
        components: {
            'LoadingApp': VueElementLoading
        },
        computed: {
            loadingState(){
                return this.$store.getters.loadingState
            }
        }
    }
</script>