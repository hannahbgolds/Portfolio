<template>
  <div class="eligibility-page">
    <header class="header">

      <header class="navbar">
      <h1 class="title">Hannah Goldstein - 📁 My Portfolio</h1>
      <button class="menu-button">☰</button>
      </header>


    </header>

    <main class="content">
      <h1>Projects</h1>
      <p>
        Description 😀
      </p>

      <NuxImg src="/images/background-image.png" alt="Pinspot Image" class="logo" />
      <!-- <NuxtImg
        src="images/donation-illustration.png"
        alt="Ilustração de Doação"
        class="illustration"
      /> -->
    </main>

    <!-- <div class="button-container">
      <button class="register-button" @click="goRegister">
        Cadastre-se e descubra se pode doar
      </button>
      <button class="continue-button" @click="goToIntention">
        Continuar sem cadastro →
      </button> -->
    <!-- </div> -->
  </div>
</template>

<script setup>
// import { useRouter } from "vue-router";
// import { redirectToID } from "~/middleware/auth";

// const router = useRouter();

// function goToIntention() {
//   router.push("/intention");
// }

// function goRegister() {
//   // const redirectPath = "/register";
//   redirectToID("/intention");
// }
</script>

<style scoped>
.eligibility-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--hemo-color-white);
  height: 100vh;
}
.logo {
  width: 130px;
  margin-bottom: 5px;
  margin-top: 5px;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--navbar-height);
  background-color: var(--hemo-color-primary-extra-light);
}

/* Seção de conteúdo com fundo colorido */
.content {
  background-color: var(--hemo-color-primary-extra-light);
  color: var(--hemo-color-white);
  padding: 20px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  padding-bottom: 100px;
  width: 100%;
  height: calc((100vh - var(--navbar-height))*0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 16px;
}

.content h1 {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

.content p {
  font-size: 1rem;
  margin: 0;
}

.illustration {
  height: 70%;
  max-width: 500px;
  max-height: 500px;
}

.button-container {
  background-color: var(--hemo-color-white);
  padding: 20px 20px 60px;
  width: 100%;
  height: calc((100vh - var(--navbar-height))*0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.register-button {
  background-color: var(--hemo-color-primary-less-light);
  color: var(--hemo-color-white);
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  max-width: 400px;
  width: 90%;
}

.continue-button {
  background: none;
  color: var(--hemo-color-primary);
  font-size: 1rem;
  margin-top: 15px;
  border: none;
  cursor: pointer;
}

.navbar {
  width: 100%;
  height: 60px;
  background-color: #222;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}
</style>