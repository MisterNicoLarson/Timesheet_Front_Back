<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FieldFormTexte',
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    maxlength: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100px'
    }
  },
  methods: {
    updateValue(event: Event) {
      const target = event.target as HTMLTextAreaElement;
      this.$emit('update:modelValue', target.value);
    }
  }
});
</script>

<template>
  <div class="field-container">
    <label :for="id" class="field-label">{{ label }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      @input="updateValue"
      :required="required"
      :disabled="disabled"
      :maxlength="maxlength"
      :style="{ width, height }"
      class="field-textarea"
    ></textarea>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<style scoped>
  .field-container {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: flex-start;
    background-color: blanchedalmond;
    border-radius: 5px;
    padding: 10px;
    width: 300px;
  }

  .field-label {
    font-size: 16px;
    color: #333;
    text-align: left;
  }

  .field-textarea {
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 16px;
    overflow: auto; 
    resize: none; 
  }
</style>
