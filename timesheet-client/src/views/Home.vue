<script lang="ts">
    import { defineComponent } from 'vue';
    import FooterComponent from '../components/FooterComponent.vue';
    
    export default defineComponent({
        name: 'Home',
        components :{
          FooterComponent
        }
    });
</script>

<template>
  <FooterComponent/>
</template>

<style>
</style>