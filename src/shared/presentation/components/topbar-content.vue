<script setup>
import LanguageSwitcher from "./language-switcher.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <pv-toolbar class="topbar">
    <template #start>
      <div class="brand-container">
        <h1 class="brand-logo">
          STOCK<span class="brand-highlight">IA</span>
        </h1>

        <span class="brand-subtitle">
          {{ t("brand.subtitle") }}
        </span>
      </div>
    </template>

    <template #end>
      <div class="flex align-items-center gap-3">
        <LanguageSwitcher />

        <pv-button
            icon="pi pi-bell"
            class="p-button-rounded p-button-text p-button-plain p-overlay-badge"
            :aria-label="t('notifications.title')"
        >
          <i
              class="pi pi-bell"
              style="font-size: 1.2rem"
          ></i>

          <span class="p-badge p-component p-badge-no-gutter p-badge-danger">
            3
          </span>
        </pv-button>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.topbar {
  background-color: #f8fafc !important;
  border-bottom: 1px solid #e2e8f0 !important;
  border: none !important;
  border-radius: 0 !important;
  padding: 0.5rem 1.5rem !important;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 70px;
  display: flex;
  align-items: center;
}

@media (min-width: 992px) {
  .topbar {
    background-color: #1a241f !important;
    border-bottom: 1px solid #2a3731 !important;
  }

  .brand-logo {
    color: white !important;
  }

  .brand-subtitle {
    color: #a1a1aa !important;
  }
}

.brand-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.brand-logo {
  color: #1e293b;
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
  color: #64748b;
}
</style>