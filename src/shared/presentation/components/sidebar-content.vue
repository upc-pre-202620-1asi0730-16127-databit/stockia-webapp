<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import LanguageSwitcher from "./language-switcher.vue";

const { t } = useI18n();
const router = useRouter();

// AHORA USA LAS LLAVES DEL ARCHIVO JSON
const items = computed(() => [
  { label: "sidebar.dashboard", to: "/layout/dashboard", icon: "pi pi-th-large" },
  { label: "sidebar.inventory", to: "/layout/inventory", icon: "pi pi-box" },
  { label: "sidebar.recipes", to: "/layout/recipes", icon: "pi pi-book" },
  { label: "sidebar.prediction", to: "/layout/prediction", icon: "pi pi-chart-line" },
  { label: "sidebar.recommendations", to: "/layout/recommendations", icon: "pi pi-star" },
  { label: "sidebar.alerts", to: "/layout/alerts", icon: "pi pi-bell", badge: 3 },
  { label: "sidebar.iot", to: "/layout/iot", icon: "pi pi-wifi" },
  { label: "sidebar.roles", to: "/layout/roles", icon: "pi pi-users" },
  { label: "sidebar.plans", to: "/layout/plans", icon: "pi pi-id-card" },
  { label: "sidebar.notifications", to: "/layout/notifications", icon: "pi pi-envelope" }
]);

const onLogout = () => {
  router.push({ path: "/iam/sign-in" });
};
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h1 class="brand-logo">
        STOCK<span class="brand-highlight">IA</span>
      </h1>
      <!-- Se usa la traducción para el subtítulo -->
      <span class="brand-subtitle">{{ t("brand.subtitle") }}</span>
    </div>

    <nav class="menu">
      <router-link
          v-for="item in items"
          :key="item.label"
          :to="item.to"
          class="menu-item"
          active-class="active"
      >
        <div class="menu-item-content">
          <i :class="item.icon" class="menu-icon"></i>
          <!-- Se usa t() reactivo para traducir el menú -->
          <span>{{ t(item.label) }}</span>
        </div>

        <span v-if="item.badge" class="badge">
          {{ item.badge }}
        </span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <div class="language-section">
        <span class="lang-label">ES / EN</span>
        <LanguageSwitcher />
      </div>

      <div class="user-info">
        <div class="avatar">AM</div>
        <div class="user-details">
          <span class="user-name">Ana Martínez</span>
          <!-- Se usa la traducción para el rol -->
          <span class="user-role">{{ t("sidebar.admin") }}</span>
        </div>
      </div>

      <button class="logout-btn" @click="onLogout">
        <i class="pi pi-sign-out"></i>
        <!-- Se usa la traducción para cerrar sesión -->
        <span>{{ t("sidebar.logout") }}</span>
      </button>
    </div>
  </aside>
</template>
<style scoped>
.sidebar {
  width: 260px;
  background-color: #1a241f;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
}

.sidebar-header {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.brand-logo {
  color: white;
  margin: 0;
  font-weight: 900;
  letter-spacing: 0.5px;
  font-size: 1.5rem;
  line-height: 1.2;
}

.brand-highlight {
  color: #ea580c;
}

.brand-subtitle {
  font-size: 0.8rem;
  color: #a1a1aa;
  margin-top: 0.25rem;
}

.menu {
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
  gap: 0.2rem;
  overflow-y: auto;
  flex: 1;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  color: #a1a1aa;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.menu-item-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.menu-icon {
  font-size: 1.1rem;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
}

.menu-item.active {
  background-color: #ea580c;
  color: white;
  font-weight: 600;
}

.badge {
  background-color: #ef4444;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.1rem 0.4rem;
  border-radius: 9999px;
}

.sidebar-footer {
  padding: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.language-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.lang-label {
  color: #a1a1aa;
  font-size: 0.8rem;
  font-weight: 600;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.avatar {
  background-color: #4b5563;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
}

.user-role {
  font-size: 0.75rem;
  color: #a1a1aa;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #a1a1aa;
  cursor: pointer;
  padding: 0;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.logout-btn:hover {
  color: white;
}
</style>