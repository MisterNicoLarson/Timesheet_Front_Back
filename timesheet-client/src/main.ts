import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(setupCalendar, {})

app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)