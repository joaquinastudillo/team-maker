import MainApp from './components/content/Main.vue'
import StepperApp from './components/content/Stepper.vue'

export const routes = [
    {
        path: '',
        component: MainApp
    },
    {
        path: '/stepper',
        component: StepperApp
    }
]

