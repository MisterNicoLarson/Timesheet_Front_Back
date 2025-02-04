<script lang="ts">

/**
 * Declaration of the <FieldForm> component with the following properties:
 * - label: "Prenom" - Label for the field.
 * - id: "prenom" - Unique identifier for the field.
 * - type: "text" - Type of the field (text, email, password, date).
 * - maxlength: "20" - Maximum length of the field.
 * - v-model: "name" - Two-way data binding with the 'name' variable.
 * - placeholder: "" - Placeholder text (empty in this case).
 * - required: true - Indicates that the field is mandatory.
 *
 * Example usage:
 * <FieldForm
 *   label="First Name"
 *   id="firstName"
 *   type="text"
 *   maxlength="50"
 *   v-model="firstName"
 *   placeholder="Enter your first name"
 *   required
 * />
 */

  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'FieldForm',
    props: {
      label: {
        type: String,
        required: true
      },
      type: {
        type: String as PropType<'text' | 'email' | 'password' | 'date'>,
        default: 'text'
      },
      id: {
        type: String,
        required: true
      },
      modelValue: {
        type: String,
        default: ''
      },
      placeholder: {
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
      }
    },

    methods: {
      updateValue(event: Event) {
        const target = event.target as HTMLInputElement;
        this.$emit('update:modelValue', target.value);
      }
    }
  });
</script>

<template>
  <div class="field-container">
    <label :for="id" class="field-label">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :maxlength="maxlength"
      class="field-input"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<style scoped>
  .field-container {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 10px;
    align-items: center; 
    background-color: blanchedalmond;
    border-radius: 5px;
    padding: 10px;
    width: 280px; 
  }

  .field-label {
    font-size: 16px;
    color: #333;
    text-align: left;
  }

  .field-input {
    width: 150px; 
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 16px;
    padding: 5px;
    transition: border-color 0.3s;
  }
</style>
