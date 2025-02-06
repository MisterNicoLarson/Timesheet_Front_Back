<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  });
</script>

<template>
  <nav>
    <div class="navbar-container">
      <div class="navbar-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div class="navbar-menu" :class="{ active: isMenuOpen }">
          <router-link to="/" class="navbar-link">Home</router-link>
          <router-link to="/NewEmployee" class="navbar-link">New employee</router-link>
          <router-link to="/NewCustomer" class="navbar-link">New customer</router-link>
          <router-link to="/Position" class="navbar-link">Position</router-link>
          <router-link to="/Timesheet" class="navbar-link">Timesheet</router-link>
          <router-link to="/Mission" class="navbar-link">Mission</router-link>
        </div>
    </div>
  </nav>
</template>

<style scoped>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  nav {
    background-color: #333;
    padding: 10px;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-logo {
    color: white;
    text-decoration: none;
    font-size: 24px;
  }
  
  .navbar-menu {
    display: flex;
    list-style: none;
  }
  
  .navbar-link {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    padding: 10px;
  }
  
  .navbar-link:hover {
    background-color: #575757;
    border-radius: 5px;
  }
  
  .navbar-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .bar {
    height: 3px;
    width: 25px;
    background-color: white;
    margin: 4px 0;
    transition: 0.4s;
  }
  
  @media (max-width: 750px) {
    .navbar-container {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .navbar-toggle {
      display: flex;
      align-self: flex-start;
    }
  
    .navbar-menu {
      display: none;
      flex-direction: column;
      width: 100%;
    }
  
    .navbar-menu.active {
      display: flex;
    }
  
    .navbar-link {
      text-align: left;
      padding: 10px;
      width: 100%;
    }
  }
</style>  