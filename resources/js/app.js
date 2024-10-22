
import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from 'D:/Yupi_Proyect/Vue3TestWeb/testPlatformLaravel/routes/index.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css';       
import 'primeicons/primeicons.css';  

const app = createApp(App);      

//Import Necessary components from the primevue
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import Ripple from 'primevue/ripple';
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Image from 'primevue/image';
import AvatarGroup from 'primevue/avatargroup';
// Register directive globally
app.directive('ripple', Ripple);

app.use(PrimeVue, {
    theme: {
        preset: 'Aura', // Use the Aura preset
        options: {
            prefix: 'p', // Customize prefix for PrimeVue components
            darkModeSelector: 'system', // Dark mode settings
            cssLayer: false // CSS layer settings
        }
    }
});



//Set the Components as Global
app.component('Menubar',Menubar);
app.component('InputText',InputText);
app.component('Avatar',Avatar);
app.component('Badge',Badge);
app.component('Button',Button);
app.component('Carousel',Carousel);
app.component('Tag',Tag);
app.component('Image',Image);
app.component('AvatarGroup',AvatarGroup);


app.use(router)

app.mount('#app')


