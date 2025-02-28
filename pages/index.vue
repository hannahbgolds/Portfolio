<template>
  <div class="eligibility-page">
    <!-- Top Navigation Bar -->
    <header class="navbar">
      <h1 class="title">Hannah Goldstein - 📁 My Portfolio</h1>
      <button class="menu-button">☰</button>
    </header>

    <!-- Content -->
    <main class="content">
      <!-- Fixed Image Rendering -->
      <!-- <img src="/images/fotoPortfolio.jpg" alt="Pinspot Image" class="logo" /> -->

      <h1>Projects</h1>
      <p>Here are some of my favorite projects—apps and platforms I’ve built to solve real-world problems and push my skills further.</p>
      <p>Take a look!</p>

      <!-- Project List -->
      <section
        v-for="(project, index) in projects"
        :key="project.nums"
        class="project-card"
        :class="{ 'visible': isVisible[index] }"
        ref="projectRefs"
      >
        <div class="project-container">
          <!-- Text Content Wrapper -->
          <div class="project-details">
            <!-- Project Number -->
            <div class="project-num">
              <!-- {{ project.nums }} -->
            </div>

            <!-- Project Category -->
            <h2 class="project-category">
              {{ project.category }}
            </h2>

            <!-- Project Description -->
            <p class="project-description">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <ul class="stack flex gap-4">
              <li v-for="tech in project.stack" :key="tech.name" class="tech-item">
                {{ tech.name }}
              </li>
            </ul>

            <!-- Divider Border -->
            <div class="border border-white/20"></div>

            <!-- Buttons with Tooltip -->
            <div class="button-container">
              <a v-if="project.appStore" :href="project.appStore" target="_blank" class="appStore-link">
                <span class="tooltip">
                  <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" 
                    width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 19L19 5M9 5h10v10"/>
                  </svg>
                  <span class="tooltiptext">App Store</span>
                </span>
              </a>
            </div>
          </div>

          <!-- Project Image (Now Positioned on the Right) -->
          <img :src="project.image" :alt="project.title" class="project-image" />
        </div>
      </section>

      <!-- Slider Section (Placeholder) -->
      <!-- <div class="slider-container w-full xl:w-[50%]">Slider</div> -->
    </main>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

// List of projects
const projects = ref([
  {
    nums: "01",
    category: "Pinspot",
    title: "iOS App",
    description: "PinSpot uses artificial intelligence to transform how we organize our discoveries on social media. This solution allows you to save your favorite spots into folders and easily find them whenever you need.",
    stack: [{ name: "SwiftUI" }, { name: "DynamoDB" }],
    image: "/images/pinspot.png",
    appStore: "https://apps.apple.com/br/app/pinspot-save-and-find/id6654888174?l=en-GB",
  },
  {
    nums: "02",
    category: "NãoPOD!",
    title: "iOS App",
    description: "A gamified iOS app designed to help users quit vaping by tracking their habits, setting reduction goals, and visualizing progress. Through an interactive experience, users stay motivated on their journey to a healthier life.",
    stack: [{ name: "SwiftUI" }],
    image: "/images/pinspot1.png",
    appStore: "https://apps.apple.com/br/app/n%C3%A3opod/id6502217586?l=en-GB",
  },
  {
    nums: "03",
    category: "Donation Eligibility Quiz",
    title: "iOS App",
    description: "An interactive web platform that helps users determine their eligibility for blood donation through a simple quiz. By answering a few questions, users receive instant feedback on whether they can donate, streamlining the donation process.",
    stack: [{ name: "Vue.js" }, { name: "Nuxt.js" }, { name: "MongoDB" }],
    image: "/images/canDonate.png",
    appStore: "https://github.com/anotherproject",
  },
]);

// Refs for tracking project visibility
const projectRefs = ref([]);
const isVisible = ref(Array(projects.value.length).fill(false));

// Set up intersection observer
onMounted(() => {
  projectRefs.value.forEach((project, index) => {
    useIntersectionObserver(
      project,
      ([{ isIntersecting }]) => {
        isVisible.value[index] = isIntersecting;
      },
      { threshold: 0.5 }
    );
  });
});
</script>

<style scoped>
.eligibility-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--hannah-color-blue);
  height: 300vh;
}

.logo {
  width: 130px;
  margin: 5px 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #222;
  color: white;
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

.content {
  padding: 20px;
  width: 100%;
  text-align: center;
}

.project-card {
  background: white;
  /* padding: 10px; */
  margin: 50px;
  border-radius: 10px;
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-container {
  display: flex;
  justify-content: space-between; /* Space between text & image */
  align-items: center; /* Align items vertically */
  gap: 20px; /* Space between text and image */
  padding: 20px;
  border-radius: 10px;
  background: #373535;
  color: white;
  text-align: left;
}

/* Text content remains in a column */
.project-details {
  display: flex;
  flex-direction: column; /* Stack text vertically */
  flex: 1; /* Take available space */
}

/* Ensure the image is positioned on the right */
.project-image {
  width: 250px; /* Adjust size */
  height: auto;
  flex-shrink: 0; /* Prevent resizing */
  align-self: center; /* Align to center of the row */
}


/* .project-image {
  width: 200px;
  height: auto;
  flex-shrink: 0;
} */

.stack {
  list-style: none;
  display: flex;
  gap: 10px;
}

.tech-item {
  background: lightgray;
  padding: 5px;
  border-radius: 5px;
}

.button-container {
  margin-top: 10px;
  overflow: visible;
  margin-bottom: 20px;
  /* display: flex; */
}

.appStore-link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: white;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.arrow-icon {
  display: block; /* Ensures it's not inline, avoiding clipping */
  width: 40px; /* Increase size */
  height: 40px; /* Increase size */
  overflow: visible; /* Ensures no clipping */
}

.slider-container {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin-top: 20px;
}
</style>
