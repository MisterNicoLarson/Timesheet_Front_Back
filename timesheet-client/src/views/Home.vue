<template>
    <div class="home">
      <header class="home-header">
        <h1>Bienvenue sur notre site !</h1>
        <p>Découvrez nos services et ce que nous avons à offrir.</p>
      </header>
      <main class="home-main">
        <section class="home-intro">
          <h2>À propos de nous</h2>
          <p>Nous sommes une entreprise dédiée à fournir des services de qualité. Notre mission est de satisfaire nos clients avec des solutions innovantes et efficaces.</p>
        </section>
        <section class="home-services">
          <h2>Nos Services</h2>
          <div class="service-item">
            <h3>Service 1</h3>
            <p>Description du service 1.</p>
          </div>
          <div class="service-item">
            <h3>Service 2</h3>
            <p>Description du service 2.</p>
          </div>
          <div class="service-item">
            <h3>Service 3</h3>
            <p>Description du service 3.</p>
          </div>
        </section>
        <section class="home-contact">
          <h2>Contactez-nous</h2>
          <p>Si vous avez des questions ou besoin de plus d'informations, n'hésitez pas à nous contacter.</p>
          <router-link to="/contact" class="contact-link">Contact</router-link>
        </section>
      </main>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'Home'
    });
  </script>
  
  <style scoped>
  .home {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  .home-header {
    text-align: center;
    padding: 50px 0;
    background-color: #f8f9fa;
  }
  
  .home-header h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  .home-header p {
    font-size: 18px;
    color: #6c757d;
  }
  
  .home-main {
    padding: 20px 0;
  }
  
  .home-intro,
  .home-services,
  .home-contact {
    margin-bottom: 40px;
  }
  
  .home-intro h2,
  .home-services h2,
  .home-contact h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .home-intro p,
  .home-services p,
  .home-contact p {
    font-size: 16px;
    color: #6c757d;
  }
  
  .home-services .service-item {
    margin-bottom: 20px;
  }
  
  .home-services .service-item h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .home-services .service-item p {
    font-size: 16px;
    color: #6c757d;
  }
  
  .home-contact .contact-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .home-contact .contact-link:hover {
    background-color: #0056b3;
  }
  </style>
  