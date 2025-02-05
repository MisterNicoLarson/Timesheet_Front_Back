<script>
    export default {
    name: 'FooterComponent'
    }
</script>

<template>
  <div class="footer">
    <div class="contact">
      <p>GSM : +33 6 47 44 20 51</p>
      <p>Mail : nclpetitjean@gmail.com</p>
    </div>
    <div class="copyright">
      <p>&copy; 2025 Nicolas Petitjean. All rights reserved</p>
    </div>
  </div>
</template>

<style scoped>
    .footer {
    background-color: grey;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .contact, .copyright {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .contact p, .copyright p {
    margin: 5px 0;
    }
</style>
