<script lang="ts">
import { defineComponent, computed, ref, onMounted, onUnmounted, useSlots } from 'vue';
import FieldForm from '../components/FieldForm.vue';

export default defineComponent({
  name: 'Form',
  components: {
    FieldForm,
  },
  props: {
    columns: {
      type: Number,
      default: 3,
    },
  },
  setup(props) {
    const columns = ref(props.columns);
    const slots = useSlots();

    const updateColumns = () => {
      const windowWidth = window.innerWidth;
      let newColumns = Math.floor(windowWidth / 320); 

      newColumns = Math.min(newColumns, 6);

      const fields = slots.default ? slots.default() : [];
      if (fields.length < 3) {
        newColumns = Math.min(newColumns, fields.length);
      }

      columns.value = newColumns;
    };

    const chunkedFields = computed(() => {
      const chunkSize = columns.value;
      const result = [];
      const fields = slots.default ? slots.default() : [];

      for (let i = 0; i < fields.length; i += chunkSize) {
        result.push(fields.slice(i, i + chunkSize));
      }

      return result;
    });

    onMounted(() => {
      updateColumns();
      window.addEventListener('resize', updateColumns);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateColumns);
    });

    return {
      columns,
      chunkedFields,
    };
  },
});
</script>


<template>
  <div class="form-container">
    <div
      class="row"
      v-for="(row, index) in chunkedFields"
      :key="index"
      :style="`grid-template-columns: repeat(${columns}, minmax(0, 1fr));`"
    >
      <div class="cell" v-for="field in row" :key="field.props?.id">
        <component :is="field" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 20px; 
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }

  .row {
    display: grid;
    gap:20px; 
    align-items: start;
  }

  .cell {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 10px; 
  }
</style>
