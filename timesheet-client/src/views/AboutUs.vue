<script lang="ts">
import { defineComponent } from 'vue';
import FieldForm from '../components/FieldForm.vue';
import Form from '../components/Form.vue';

export default defineComponent({
  name: 'About',
  components: {
    FieldForm,
    Form
  },
  data() {
    return {
      name: '',
      email: ''
    };
  }
});
</script>

<template>
  <div class="about">
    <Form>
      <FieldForm
        label="Prénom"
        id="prenom"
        type="text"
        maxlength="20"
        required
      />
      <FieldForm
        label="Nom"
        id="nom"
        type="text"
        maxlength="20"
        required
      />
      <FieldForm
        label="Prénom"
        id="prenom2"
        type="text"
        maxlength="20"
        required
      />
      <FieldForm
        label="Date de la signature du contrat"
        id="date"
        type="date"
        maxlength="20"
        required
      />
      <FieldForm
        label="Email"
        id="email"
        type="email"
        required
      />
      <FieldForm
        label="Mot de passe"
        id="password"
        type="password"
        required
      />
    </Form>
  </div>
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