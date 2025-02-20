<script lang="ts">
import { defineComponent } from 'vue';
import FieldForm from '../components/FieldForm.vue';
import FieldFormText from '../components/FieldFormText.vue';
import Form from '../components/Form.vue';
import FooterComponent from '../components/FooterComponent.vue';
import NavBar from '../components/NavBar.vue';
//@ts-ignore
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
  //https://vcalendar.io/getting-started/installation.html
  //https://antoniandre.github.io/vue-cal/
  //https://antoniandre.github.io/vue-cal-v4/
export default defineComponent({
  name: 'TimeSheet',
  components: {
    VueCal,
    NavBar,
    FooterComponent,
    FieldFormText,
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
  <div class="NavBar">
    <NavBar/>
  </div>
  <div class="main-content">
    <div class="calendar">
      <vue-cal
        hide-view-selector
        :time="false"
        active-view="month"
        xsmall>
        <template #arrow-prev>
          <i class="icon material-icons">arrow_back</i>
        </template>
        <template #arrow-next>
          <i class="icon material-icons">arrow_forward</i>
        </template>
      </vue-cal>
    </div>
    <div class="addTimeline">
      <div class="form-section">
        <Form>
        
        <FieldForm
          label="Duration"
          id="id_duration"
          type="heure"
          maxlength="20"
          required
        />
        <FieldFormText
          label="Description"
          id="id_description"
          type="string"
          maxlength="1000"
          required
        />
        <FieldForm
          label="Mission name"
          id="id_mission_name"
          type="text"
          maxlength="20"
          required
        />
      </Form>
      </div>
      <div class="week">
        
      </div>
    </div>
  </div>
  <div class="FooterComponent">
    <FooterComponent/>
  </div>
</template>


<style scoped>
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

.NavBar {
  height: 10%;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.main-content {
  display: flex;
  flex: 1;
}

.calendar {
  width: 30%;
  border-right: 1px solid #dee2e6;
  padding: 10px;
}

.addTimeline {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.form-section {
  flex: 1;
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
}

.week {
  padding: 10px;
}

.FooterComponent {
  height: 10%;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  margin-top: auto;
}
</style>