<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <nav class="bottom-nav">
    <router-link to="/layout/dashboard" class="nav-item" active-class="active">
      <i class="pi pi-th-large icon"></i>
      <span>{{ t("sidebar.dashboard") }}</span>
    </router-link>

    <router-link to="/layout/inventory" class="nav-item" active-class="active">
      <i class="pi pi-box icon"></i>
      <span>{{ t("sidebar.inventory") }}</span>
    </router-link>

    <router-link to="/layout/alerts" class="nav-item" active-class="active">
      <div class="icon-wrapper">
        <i class="pi pi-bell icon"></i>
        <span class="badge">3</span>
      </div>
      <span>{{ t("sidebar.alerts") }}</span>
    </router-link>

    <!-- Botón de menú o más opciones -->
    <button class="nav-item more-btn">
      <i class="pi pi-bars icon"></i>
      <span>Más</span>
    </button>
  </nav>
</template>

<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: 1px solid #e2e8f0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65px;
  z-index: 1000;
  padding-bottom: env(safe-area-inset-bottom); /* Para iPhones */
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #64748b;
  text-decoration: none;
  font-size: 0.7rem;
  font-weight: 500;
  gap: 0.25rem;
  flex: 1;
  background: none;
  border: none;
  padding: 0;
}

.icon {
  font-size: 1.25rem;
}

.icon-wrapper {
  position: relative;
}

.badge {
  position: absolute;
  top: -4px;
  right: -6px;
  background-color: #ef4444;
  color: white;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 0.1rem 0.3rem;
  border-radius: 50px;
}

/* Estado activo color naranja */
.nav-item.active, .nav-item:active {
  color: #ea580c;
}
</style>