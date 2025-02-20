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
      NavBar,
      CardElement,
      ListCard,
      FieldForm,
      Form,
      FooterComponent
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
      <ListCard>
        <CardElement
          imgPath="AI_Photo/uk_perso.jpg"
          complement_header="Gontini"
          name_header="Fabio"
          subtitle_header="CREOS"
        />
        <CardElement
          imgPath="AI_Photo/uk_perso.jpg"
          name_header="Hans"
          complement_header="Nuremberg"
          subtitle_header="Encevo"
        />
        <CardElement
          imgPath="AI_Photo/uk_perso.jpg"
          complement_header="Willson"
          name_header="Smith"
          subtitle_header="AXA"
        />
      </ListCard>
    </div>
    <div class="droite">
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
        <FieldForm
          label="Mail address"
          id="id_mail_address"
          type="text"
          maxlength="150"
          required
        />
        <FieldForm
          label="Companie"
          id="id_companie"
          type="text"
          maxlength="150"
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