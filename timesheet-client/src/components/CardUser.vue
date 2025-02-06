<script>
export default {
  name: 'CardUser',
  props: {
    imgPath: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  },
  methods: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<template>
  <div class="card">
    <div class="photo">
      <img :src="imgPath" :alt="`${firstName} ${lastName}`" class="avatar">
    </div>
    <div class="user-info">
      <h2 class="user-name">{{ firstName }} {{ toUpperCase(lastName) }}</h2>
      <p class="user-position">{{ position }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 2px;
  display: flex;
  align-items: center;
  background-color: #85d2ed;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 330px;
  height: 100px;
  margin: 10px;
}

.photo {
  flex: 0 0 80px;
  margin-right: 16px;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  flex: 1;
}

.user-name {
  margin: 0;
  font-size: 1.2em;
  color: #333;
}

.user-position {
  margin: 8px 0 0;
  font-size: 1em;
  color: #666;
}

@media (max-width: 450px) {
  .card {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
  }

  .photo {
    flex: 0 0 60px; 
    margin-right: 0;
    margin-bottom: 16px;
  }

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-info {
    text-align: center;
  }
}
</style>
