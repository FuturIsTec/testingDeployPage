<template>
  <div class="home">
    <div class="feature feature-1 smart-home" @click="navigateToSmartHome">
      <i class="fa fa-home"></i>
      <span>Smart Home</span>
    </div>
    <div class="feature feature-2 disabled">
      <i class="fa fa-question"></i>
      <span>Feature 2</span>
    </div>
    <div class="feature feature-3 disabled">
      <i class="fa fa-question"></i>
      <span>Feature 3</span>
    </div>
    <div class="feature feature-4 disabled">
      <i class="fa fa-question"></i>
      <span>Feature 4</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToSmartHome() {
      // Navigate to the Smart Home feature page
      this.$router.push("/smartHome");
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.feature {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin: 20px;
  border-radius: 50%;
  background-color: #ffffffda;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.feature:hover {
  transform: scale(1.1);
  color: rgb(162, 235, 210);
  background-color: rgb(112, 97, 97);
  font-weight: bold;
}

.feature.disabled {
  opacity: 0.3;
  filter: grayscale(100%);
}

@media screen and (max-width: 400px) {
  .feature {
    width: 120px;
    height: 120px;
    margin: 32px;
  }

  .feature-3,
  .feature-4 {
    transform: translateY(-20%);
  }
}

@media screen and (max-width: 290px) {
  .feature-1 {
    margin-bottom: -0.5rem;
  }
  .feature-4 {
    margin-top: 0em;
  }
}
</style>
