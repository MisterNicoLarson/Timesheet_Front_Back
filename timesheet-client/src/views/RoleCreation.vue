<script lang="ts">
  import { defineComponent } from 'vue';
  import FieldForm from '../components/FieldForm.vue';
  import Form from '../components/Form.vue';
  import NavBar from '../components/NavBar.vue';  
  import FooterComponent from '../components/FooterComponent.vue';
  import ListElement from '../components/ListElement.vue';
  import CardRegularElement from '../components/CardRegularElement.vue'

  export default defineComponent({
    name: 'RoleCreation',
    components: {
      ListElement,
      CardRegularElement,
      FooterComponent,
      NavBar,
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
  <NavBar/>
  <div class="container">
    <div class="gauche">
      <ListElement>
      </ListElement>
    </div>
    <div class="droite">
      <Form>
        <FieldForm
          label="Position"
          id="id_postiion"
          type="text"
          maxlength="20"
          required
        />
        <FieldForm
          label="Rate"
          id="id_rate"
          type="text"
          maxlength="20"
          required
        />
      </Form>
    </div>
  </div>
  <FooterComponent/>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;
  }

  .gauche {
    flex: 1;
    margin-right: 16px;
  }

  .droite {
    flex: 2;
  }
</style>