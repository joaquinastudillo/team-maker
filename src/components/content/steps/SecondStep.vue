<template>
    <div class="step-item"
        :class="{ 'is-active': isActive, 'is-completed' : isCompleted }"
        >
        <div class="step-marker">{{ step.id }}</div>
        <div class="step-details">
            <p class="step-title">{{ step.name }}</p>
            <p>{{ step.description }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'firstStepApp',
        data(){
            return {
                step: {
                    id: 2,
                    name: "Players",
                    description: "Add players to the match",
                    isActiveStep: false
                }
            }
        },
        computed: {
            isActive(){
                return this.$store.getters.activatedStep == this.step.id
            },
            isCompleted(){
                return this.$store.getters.stepTwoCompleted
            }
        }
    }
</script>