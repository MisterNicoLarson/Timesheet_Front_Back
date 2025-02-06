<script lang="ts">
    import { defineComponent } from 'vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import NavBar from '../components/NavBar.vue';
    
    export default defineComponent({
        name: 'Home',
        components :{
          NavBar,
          FooterComponent
        }
    });
</script>

<template>
  <NavBar/>
  <FooterComponent/>
</template>

<style>
</style>