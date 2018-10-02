<template>
    <div class="step-item"
        :class="{ 'is-active': isActive }"
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
                    name: "Step Two",
                    description: "This is the second step",
                    isActiveStep: false
                }
            }
        },
        computed: {
            isActive(){
                return this.$store.getters.activatedStep == this.step.id
            }
        }
    }
</script>