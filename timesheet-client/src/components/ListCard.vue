<script>
  export default {
    name: 'MistCard'
  };
</script>

<template>
    <div class="list-card">
      <slot></slot>
    </div>
</template>
  
<style scoped>
    .list-card {
        width: 350px;
        height: 80vh; 
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
</style>
  