<script setup>
import { useI18n } from "vue-i18n";

const { locale, availableLocales } = useI18n();

const setLocale = (lang) => {
  locale.value = lang;
};
</script>

<template>
  <div class="custom-lang-switcher">
    <button
        v-for="lang in availableLocales"
        :key="lang"
        :class="['lang-btn', { active: locale === lang }]"
        @click="setLocale(lang)"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<style scoped>
.custom-lang-switcher {
  display: inline-flex;
  background-color: #2a3731;
  border-radius: 6px;
  padding: 3px;
  gap: 2px;
}

.lang-btn {
  background: transparent;
  border: none;
  color: #a1a1aa;
  padding: 0.25rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.lang-btn:hover {
  color: white;
}

.lang-btn.active {
  background-color: #ea580c;
  color: white;
}
</style>