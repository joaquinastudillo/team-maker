import MainApp from './components/content/Main.vue'
import StepperApp from './components/content/Stepper.vue'
import firstStepApp from './components/content/steps/FirstStep.vue'

export const routes = [
    {
        path: '',
        component: MainApp
    },
    {
        path: '/stepper',
        component: StepperApp,
        children: [
            {
                path: 'firstStep',
                component: firstStepApp
            }
        ]
    }
]

