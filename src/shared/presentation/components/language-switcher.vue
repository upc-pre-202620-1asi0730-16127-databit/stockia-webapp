<script setup>
import { useI18n } from "vue-i18n";
const { locale, availableLocales } = useI18n();
</script>

<template>
  <div class="lang-switcher">
    <pv-select-button v-model="locale" :options="availableLocales" aria-labelledby="basic">
      <template #option="slotProps">
        <span class="lang-text">{{ slotProps.option.toUpperCase() }}</span>
      </template>
    </pv-select-button>
  </div>
</template>

<style scoped>

:deep(.p-selectbutton .p-button) {
  background-color: #2a3731;
  border: 1px solid #3f4c45;
  color: #94a3b8;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
}
:deep(.p-selectbutton .p-button.p-highlight) {
  background-color: #ea580c;
  border-color: #ea580c;
  color: white;
}
.lang-text {
  font-weight: 600;
}
</style>