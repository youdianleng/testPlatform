<script>
import TopBar from "../views/layouts/TopBar.vue";
import Footer from '../views/layouts/Footer.vue';
export default {
  name: 'App',
   components: {
     TopBar, 
     Footer,
   },
};

</script>

<template>
  <nav>
    <TopBar/>
  </nav>
  <main>
      <router-view />
  </main>
  <Footer />
</template>
  

  
  <style scoped>
  h1 {
    color: #42b983;
  }

  body{
    background-color: white;
  }
  </style>