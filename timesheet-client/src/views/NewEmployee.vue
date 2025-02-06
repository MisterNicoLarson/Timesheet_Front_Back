<script lang="ts">
import { defineComponent } from 'vue';
import FieldForm from '../components/FieldForm.vue';
import Form from '../components/Form.vue';
import CardUser from '../components/CardUser.vue'
import FooterComponent from '../components/FooterComponent.vue';
import ListCardUser from '../components/ListCardUser.vue';
import NavBar from '../components/NavBar.vue';

export default defineComponent({
  name: 'newEmployee',
  components: {
    NavBar,
    CardUser,
    ListCardUser,
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
  <NavBar />
  <div class="container">
    <div class="gauche">
      <ListCardUser>
        <CardUser
          imgPath="AI_Photo/billyAI.jpg"
          lastName="Bertrand Christen"
          firstName="Pierre Henry"
          position="Developper"
        />
        <CardUser
          imgPath="AI_Photo/katieAI.jpg"
          firstName="Katie"
          lastName="Williams"
          position="Account Manager"
        />
        <CardUser
          imgPath="AI_Photo/juliaAI.jpg"
          lastName="Frederique"
          firstName="Julia"
          position="CTO"
        />
      </ListCardUser>
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
          id="id_city"
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
    </div>
    <FooterComponent/>
  </div>
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