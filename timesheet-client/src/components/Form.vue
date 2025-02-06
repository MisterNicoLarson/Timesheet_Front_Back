<script lang="ts">
import { defineComponent } from 'vue';
import FieldForm from '../components/FieldForm.vue';

export default defineComponent({
  name: 'Form',
  components: {
    FieldForm
  }
});
</script>

<template>
  <div class="form-container">
    <slot></slot>
  </div>
</template>

<style scoped>
  .form-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    padding: 16px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
