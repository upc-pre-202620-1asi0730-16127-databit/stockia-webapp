<script setup>
import SidebarContent from "./sidebar-content.vue";
import MobileTopbar from "./mobile-topbar-content.vue";
import MobileBottomNav from "./mobile-bottom-navbar-content.vue";
</script>

<template>
  <div class="layout-wrapper">
    <MobileTopbar class="mobile-only" />

    <div class="layout-body">
      <SidebarContent class="desktop-only" />

      <main class="content-container">
        <router-view />
      </main>

    </div>
    <MobileBottomNav class="mobile-only" />
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8faf9;
}

.layout-body {
  display: flex;
  flex: 1;
}

.content-container {
  flex: 1;
  margin-left: 260px;
  padding: 2.5rem;
  overflow-y: auto;
  background-color: #f8faf9;
}

.mobile-only {
  display: none !important;
}

@media (max-width: 991px) {
  .desktop-only {
    display: none !important;
  }

  .mobile-only {
    display: flex !important;
  }

  .content-container {
    margin-left: 0;
    padding: 1rem;
    padding-top: 85px;
    padding-bottom: 85px;
  }
}
</style>