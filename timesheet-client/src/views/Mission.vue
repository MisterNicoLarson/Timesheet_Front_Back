<script lang="ts">
    import { defineComponent } from 'vue';
    import FieldForm from '../components/FieldForm.vue';
    import Form from '../components/Form.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import NavBar from '../components/NavBar.vue';
    import ListCard from '../components/ListCard.vue';
    import CardElement from '../components/CardElement.vue';

    export default defineComponent({
        name: 'newEmployee',
        components: {
          ListCard,
          CardElement,
          NavBar,
          FieldForm,
          Form,
          FooterComponent
        },
    });
</script>

<template>
  <NavBar/>
  <div class="container">
    <div class="gauche">
      <ListCard>
        <CardElement
          name_header="RPA_Super_companie_S4_2025"
          subtitle_header="Solution"
        />
        <CardElement
          name_header="Python_Cyber_API_Super_Companie_S4_2025"
          subtitle_header="Solution"
        />
      </ListCard>
    </div>
    <div class="droite">
      <Form>
        <FieldForm
          label="Mission Name"
          id="id_mission_name"
          type="text"
          maxlength="100"
          required
        />
        <FieldForm
          label="Starting date"
          id="id_starting_date"
          type="date"
          maxlength="20"
          required
        />
        <FieldForm
          label="Deadline"
          id="id_deadline"
          type="date"
          maxlength="20"
          required
        />
        <FieldForm
          label="Responsable"
          id="id_reponsable"
          type="text"
          maxlength="150"
        />
        <FieldForm
          label="Companie"
          id="id_companie"
          type="text"
          maxlength="50"
          required
        />
        <FieldForm
          label="Budget"
          id="id_budget"
          type="text"
          maxlength="20"
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