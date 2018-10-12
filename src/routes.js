import MainApp from './components/content/Main.vue'
import StepperApp from './components/content/Stepper.vue'
import ResultsApp from './components/content/steps/Results.vue'

export const routes = [
    {
        path: '',
        component: MainApp
    },
    {
        path: '/stepper',
        component: StepperApp,
    },
    {
        path: '/results',
        component: ResultsApp
    }
]

