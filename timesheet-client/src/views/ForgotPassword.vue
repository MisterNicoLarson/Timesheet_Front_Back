<script lang="ts">
import { defineComponent } from 'vue';
import FooterComponent from '../components/FooterComponent.vue';


export default defineComponent({
  name: 'ForgotPassword',
  data() {
    return {
      email: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log('Email:', this.email);
    }
  }
});
</script>


<template>
    <div class="forgot-password-page">
      <header class="forgot-password-header">
        <h1>Forgot Password</h1>
      </header>
      <main class="forgot-password-main">
        <form class="forgot-password-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <button type="submit" class="submit-button">Reset Password</button>
        </form>
      </main>
    </div>
    <FooterComponent/>
  </template>
  
  <style scoped>
  .forgot-password-page {
    font-family: Arial, sans-serif;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;
  }
  
  .forgot-password-header {
    margin-bottom: 20px;
  }
  
  .forgot-password-header h1 {
    font-size: 36px;
    color: #333;
  }
  
  .forgot-password-main {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .forgot-password-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
    color: #333;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .submit-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>
  