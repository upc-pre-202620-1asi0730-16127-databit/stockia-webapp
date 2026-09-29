<script setup>
import LanguageSwitcher from "./language-switcher.vue";
</script>

<template>
  <header class="mobile-topbar">
    <div class="brand-container">
      <h1 class="brand-logo">STOCK<span class="brand-highlight">IA</span></h1>
      <span class="brand-subtitle">La Cantina Verde</span>
    </div>

    <div class="topbar-actions">
      <!-- Icono de notificaciones con badge -->
      <div class="notification-icon">
        <i class="pi pi-envelope" style="font-size: 1.2rem; color: #1e293b;"></i>
        <span class="badge">3</span>
      </div>

      <!-- Avatar de usuario -->
      <div class="avatar">AM</div>

      <!-- El switcher que acabamos de arreglar -->
      <LanguageSwitcher />
    </div>
  </header>
</template>

<style scoped>
.mobile-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: #f8faf9;
  border-bottom: 1px solid #e2e8f0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 70px;
}

.brand-container {
  display: flex;
  flex-direction: column;
}

.brand-logo {
  color: #1e293b;
  margin: 0;
  font-weight: 900;
  letter-spacing: 0.5px;
  font-size: 1.25rem;
  line-height: 1.1;
}

.brand-highlight {
  color: #ea580c;
}

.brand-subtitle {
  font-size: 0.7rem;
  color: #64748b;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.notification-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge {
  position: absolute;
  top: -5px;
  right: -8px;
  background-color: #ef4444;
  color: white;
  font-size: 0.65rem;
  font-weight: bold;
  padding: 0.1rem 0.3rem;
  border-radius: 50px;
}

.avatar {
  background-color: #1a241f;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.8rem;
}
</style>