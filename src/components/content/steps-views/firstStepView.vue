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
                    <input class="input" name="price" id="price" type="number" placeholder="$" required>
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
                    <input class="input" type="number" name="duration" id="duration" placeholder="minutes" required>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'firstStepAppView'
    }
</script>