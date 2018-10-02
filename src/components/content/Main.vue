<template>
            <div class="hero-body" id="content-hero">
                        <div class="container has-text-centered">
                            <div class="column is-6 is-offset-3">
                                <h1 class="title" id="main-title">
                                    Match Creator
                                </h1>

                                <a class="button is-large is-success is-outlined" @click="showStepper">Start</a>

                            </div>
                        </div>
            </div>
</template>

<script>
    export default {
        name: 'MainApp',
        methods: {
            showStepper(){
                this.$router.push('/stepper')
            }
        }
    }
</script>