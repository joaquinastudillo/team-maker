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
                                        Stepper
                                    </p>
                                    <div class="tags has-addons level-item">
                                        <span class="tag is-rounded is-info">@skeetskeet</span>
                                        <span class="tag is-rounded">May 10, 2018</span>
                                    </div>
                                </div>
                            </div>
                            <div class="content article-body">
                                <div class="steps">
                                    <div class="step-item">
                                        <div class="step-marker">1</div>
                                        <div class="step-details">
                                        <p class="step-title">Step 1</p>
                                        <p>This is the first step of the process.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import '../../../node_modules/bulma-extensions/bulma-steps/dist/js/bulma-steps.js'
    import '../../../node_modules/bulma-extensions/bulma-steps/dist/css/bulma-steps.min.css'
    export default {
        name: 'StepperApp'
    }
</script>