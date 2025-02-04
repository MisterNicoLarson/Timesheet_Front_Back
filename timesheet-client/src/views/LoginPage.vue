<template>
   <div class="login-page">
     <main class="login-main">
       <form class="login-form" @submit.prevent="handleSubmit">
         <div class="form-group">
           <label for="email">Email</label>
           <input type="email" id="email" v-model="email" required>
         </div>
         <div class="form-group">
           <label for="password">Password</label>
           <input type="password" id="password" v-model="password" required>
         </div>
         <button type="submit" class="submit-button">Login</button>
         <div class="forgot-password">
           <router-link to="/ForgotPassword" class="forgot-password-link">Forgot Password?</router-link>
         </div>
       </form>
     </main>
   </div>
 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 
 export default defineComponent({
   name: 'LoginPage',
   data() {
     return {
       email: '',
       password: ''
     };
   },
   methods: {
     handleSubmit() {
       console.log('Email:', this.email);
       console.log('Password:', this.password);
      }
   }
 });
 </script>
 
 <style scoped>
 .login-page {
   font-family: Arial, sans-serif;
   padding: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
   background-color: #f8f9fa;
 }
 
 .login-header {
   margin-bottom: 20px;
 }
 
 .login-header h1 {
   font-size: 36px;
   color: #333;
 }
 
 .login-main {
   background-color: white;
   padding: 40px;
   border-radius: 10px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 }
 
 .login-form {
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
 
 .forgot-password {
   margin-top: 20px;
   text-align: center;
 }
 
 .forgot-password-link {
   color: #007bff;
   text-decoration: none;
   font-size: 14px;
 }
 
 .forgot-password-link:hover {
   text-decoration: underline;
 }
 </style>
 