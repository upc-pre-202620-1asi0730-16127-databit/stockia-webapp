<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useToast } from 'primevue/usetoast';
import { useAlertsStore } from '../../application/alerts.store.js';
import { toErrorMessage } from '../../../shared/domain/model/business-rule-error.js';
//import PageHeader from '../../../shared/presentation/components/page-header.vue';

const { t } = useI18n();
const toast = useToast();
const alertsStore = useAlertsStore();

const loading = ref(!alertsStore.recommendationsLoaded);
const applyingId = ref(null);

onMounted(async () => {
  try {
    await alertsStore.loadRecommendations();
  } catch (error) {
    toast.add({ severity: 'error', summary: t(toErrorMessage(error, 'errors.load').code), life: 4000 });
  } finally {
    loading.value = false;
  }
});

async function apply(recommendation) {
  applyingId.value = recommendation.id;
  try {
    await alertsStore.applyRecommendation(recommendation);
    toast.add({ severity: 'success', summary: t('recommendations.applied-toast'), life: 2500 });
  } catch (error) {
    toast.add({ severity: 'error', summary: t(toErrorMessage(error, 'errors.save').code), life: 4000 });
  } finally {
    applyingId.value = null;
  }
}
</script>

<template>

</template>

<style scoped>

</style>