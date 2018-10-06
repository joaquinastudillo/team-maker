<template>
    <div>
        <div class="container">
            <section class="articles">
                <div class="column is-8 is-offset-2">
                    <div class="card article">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content has-text-centered">
                                    <p class="title article-title">
                                        Let's create teams
                                    </p>
                                    <div class="tags has-addons level-item">
                                        <span class="tag is-rounded is-info">@joaquin_cl</span>
                                        <span class="tag is-rounded">May 10, 2018</span>
                                    </div>
                                </div>
                            </div>
                            <div class="content article-body">
                                <div class="steps">
                                    <first-step-app></first-step-app>
                                    <second-step-app></second-step-app>
                                    <third-step-app></third-step-app>
                                </div>

                                <first-step-app-view v-if="activeStep == 1"></first-step-app-view>
                                <second-step-view-app v-if="activeStep == 2"></second-step-view-app>
                                <third-step-view-app v-if="activeStep == 3"></third-step-view-app>
                            
                            </div>
                        </div>
                         <div class="steps-actions">
                                    <div class="field is-grouped">
                                        <p class="control">
                                            <a class="button" 
                                               @click="$store.commit('prevStep')" 
                                               :disabled="$store.state.activeStep <= 1"
                                               >
                                            previous
                                            </a>
                                        </p>
                                        <p class="control">
                                            <a class="button" 
                                               @click="$store.commit('nextStep')"
                                               :disabled="$store.state.activeStep >= 3"
                                               >
                                            next
                                            </a>
                                        </p>
                                    </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import "../../../node_modules/bulma-extensions/bulma-steps/dist/js/bulma-steps.js";
import "../../../node_modules/bulma-extensions/bulma-steps/dist/css/bulma-steps.min.css";
import firstStepApp from "./steps/firstStep.vue";
import firstStepAppView from "./steps-views/firstStepView.vue";
import SecondStepApp from "./steps/SecondStep.vue";
import SecondStepViewApp from "./steps-views/SecondStepView.vue";
import ThirdStepApp from "./steps/ThirdStep.vue";
import ThirdStepViewApp from "./steps-views/ThirdStepView.vue";
export default {
  name: "StepperApp",
  components: {
    firstStepApp,
    firstStepAppView,
    SecondStepApp,
    SecondStepViewApp,
    ThirdStepApp,
    ThirdStepViewApp
  },
  computed: {
    activeStep() {
      return this.$store.getters.activatedStep;
    }
  }
}
</script>

<style>
.steps-actions{
    display:flex;
    justify-content: center;
    background-color: #41b883;
    padding: 15px;
}
</style>
