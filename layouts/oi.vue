<template>
  <div class="layout">
    <!-- Top Navigation Bar -->
    <header class="navbar">
      <h1 class="title">📁 My Portfolio</h1>
      <button class="menu-button">☰</button>
    </header>

    <!-- Main content slot -->
    <main class="page">
      <slot />
    </main>
  </div>
</template>

<style scoped>
/* Layout Structure */
.layout {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.page {
  flex-grow: 1; /* Ensure slot content is visible */
  overflow: auto; /* Allow scrolling if necessary */
}

/* Navigation Bar */
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

.menu-button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.menu-button:hover {
  opacity: 0.8;
}
</style>
