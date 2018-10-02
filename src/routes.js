import MainApp from './components/content/Main.vue'
import StepperApp from './components/content/Stepper.vue'
import GridStepApp from './components/content/steps/GridStep.vue'

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
                path: 'step',
                component: GridStepApp
            }
        ]
    }
]

