import { createApp } from 'vue'

// export dunction
import App from './App.vue'
import router from './router'
import store from './store'


createApp(App).use(store).use(router).mount('#app')//采取的链式编程，不能用=号
// 提交    推送

