<script>
export default {
  name: 'CardUser',
  props: {
    imgPath: {
      type: String,
      required: false, 
      default: '' 
    },
    name_header: {
      type: String,
      required: true
    },
    complement_header: {
      type: String,
      required: true
    },
    subtitle_header: {
      type: String,
      required: true,
    }
  },
  computed: {
    hasImage() {
      return this.imgPath && this.imgPath.trim() !== '';
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
    <div v-if="hasImage" class="photo">
      <img :src="imgPath" :alt="`${name_header} ${complement_header}`" class="avatar">
    </div>
    <div class="info-card">
      <h2 class="info-header">{{ name_header }} {{ toUpperCase(complement_header) }}</h2>
      <p class="subtitle-header">{{ subtitle_header }}</p>
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
  min-height: 100px;
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

.info-card {
  flex: 1;
}

.info-header {
  margin: 0;
  font-size: 1.2em;
  color: #333;
}

.subtitle-header {
  margin: 8px 0 0;
  font-size: 1em;
  color: #666;
}

@media (max-width: 450px) {
  .card {
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 300px;
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

  .info-card {
    text-align: center;
  }
}
</style>
