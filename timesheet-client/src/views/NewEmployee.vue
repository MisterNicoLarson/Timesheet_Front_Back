<script lang="ts">
import { defineComponent } from 'vue';
import FieldForm from '../components/FieldForm.vue';
import Form from '../components/Form.vue';

export default defineComponent({
  name: 'newEmployee',
  components: {
    FieldForm,
    Form
  },
  data() {
    return {
    };
  }
});
</script>

<template>
  <h1>General Information</h1>
    <Form>
      <FieldForm
        label="First Name"
        id="id_first_name"
        type="text"
        maxlength="20"
        required
      />
      <FieldForm
        label="Last Name"
        id="id_last_name"
        type="text"
        maxlength="20"
        required
      />
      <FieldForm
        label="Address"
        id="id_address"
        type="text"
        maxlength="50"
        required
      />
      <FieldForm
        label="City"
        id="id_address"
        type="text"
        maxlength="50"
        required
      />
      <FieldForm
        label="Zip"
        id="id_ZIP"
        type="text"
        maxlength="50"
        required
      />
      <FieldForm
        label="Cell phone"
        id="id_cell_phone"
        type="text"
        maxlength="50"
        required
      />
    </Form>
    <h1>Bank account</h1>
    <Form>
      <FieldForm
        label="IBAN"
        id="id_IBAN"
        type="text"
        maxlength="50"
        required
      />
      <FieldForm
        label="BIC"
        id="id_BIC"
        type="text"
        maxlength="50"
        required
      />
    </Form>
    <h1>Job information</h1>
    <Form>
      <FieldForm
        label="Role"
        id="id_role"
        type="text"
        maxlength="50"
        required
      />
      <FieldForm
        label="Date of contract signature"
        id="id_Docs"
        type="date"
        maxlength="50"
        required
      />
    </Form>
</template>

<style scoped>
  .about {
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  .about-header {
    text-align: center;
    padding: 50px 0;
    background-color: #f8f9fa;
  }

  .about-header h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  .about-main {
    padding: 20px 0;
  }

  .about-main p {
    font-size: 16px;
    color: #6c757d;
  }
</style>