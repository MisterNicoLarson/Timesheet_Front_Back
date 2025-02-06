<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CardRegularElement',
    props: {
      name: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    }
  });
</script>

<template>
    <div class="card-regular-element">
      <div class="element-name-container">
        <h2 class="element-name">{{ name }}</h2>
      </div>
      <div class="element-info-container">
        <p class="element-info">{{ info }}</p>
      </div>
    </div>
</template>

<style scoped>
  .card-regular-element {
    border-radius: 8px;
    background-color: #85d2ed;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 330px;
    height: 120px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .element-name-container, .element-info-container {
    width: 100%;
    overflow-y: auto;
    max-height: 50%;
  }

  .element-name {
    margin: 0;
    font-size: 1.2em;
    color: #333;
    word-wrap: break-word;
  }

  .element-info {
    margin: 8px 0 0;
    font-size: 1em;
    color: #666;
    word-wrap: break-word;
  }

  @media (max-width: 450px) {
    .card-regular-element {
      width: 100%;
      height: auto;
    }
  }
</style>
