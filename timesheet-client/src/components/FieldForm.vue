<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'FieldForm',
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<'text' | 'email' | 'password' | 'date' | 'heure'>,
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
      let value = target.value;

      if (this.type === 'heure') {
        value = this.validateTime(value);
      }

      this.$emit('update:modelValue', value);
    },
    validateTime(time: string): string {
      const timePattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
      if (!timePattern.test(time)) {
        return '';
      }

      const [hours, minutes] = time.split(':').map(Number);
      const totalMinutes = hours * 60 + minutes;

      if (totalMinutes < 0 || totalMinutes > 8 * 60) {
        return '';
      }

      const roundedMinutes = Math.round(totalMinutes / 5) * 5;
      const roundedHours = Math.floor(roundedMinutes / 60);
      const roundedTime = `${String(roundedHours).padStart(2, '0')}:${String(roundedMinutes % 60).padStart(2, '0')}`;

      return roundedTime;
    }
  }
});
</script>

<template>
  <div class="field-container">
    <label :for="id" class="field-label">{{ label }}</label>
    <input
      v-if="type !== 'heure'"
      :type="type"
      :id="id"
      :value="modelValue"
      @input="updateValue"
      :required="required"
      :disabled="disabled"
      :maxlength="maxlength"
      class="field-input"
    />
    <input
      v-else
      type="time"
      :id="id"
      :value="modelValue"
      @input="updateValue"
      :required="required"
      :disabled="disabled"
      step="300"  
      min="00:00"
      max="08:00"
      class="field-input"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<style scoped>
  .field-container {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
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

  .field-input {
    width: 150px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 16px;
    padding: 5px;
  }
</style>