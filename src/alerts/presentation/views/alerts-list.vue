<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';
import { useAlertsStore } from '../../application/alerts.store.js';
import { AlertChannel, AlertSeverity, AlertType } from '../../domain/model/alert.entity.js';
import { toErrorMessage } from '../../../shared/domain/model/business-rule-error.js';
import { minLength, required, validate } from '../../../shared/presentation/validation.js';
//import AlertSeverityTag from '../components/alert-severity-tag.vue';
//import PageHeader from '../../../shared/presentation/components/page-header.vue';
//import FormField from '../../../shared/presentation/components/form-field.vue';

const { t, d } = useI18n();
const toast = useToast();
const confirm = useConfirm();
const alertsStore = useAlertsStore();

const loading = ref(!alertsStore.alertsLoaded);
const busyId = ref(null);
const dialogVisible = ref(false);
const editing = ref(null);
const submitted = ref(false);
const saving = ref(false);

const emptyForm = () => ({ type: AlertType.LOW_STOCK, severity: AlertSeverity.WARNING, message: '', channel: AlertChannel.WHATSAPP });
const form = reactive(emptyForm());

const typeOptions = computed(() => Object.values(AlertType).map((value) =>
    ({ value, label: t(`alerts.type.${value}`) })));
const severityOptions = computed(() => Object.values(AlertSeverity).map((value) =>
    ({ value, label: t(`alerts.severity.${value}`) })));
const channelOptions = computed(() => Object.values(AlertChannel).map((value) =>
    ({ value, label: t(`alerts.channel.${value}`) })));
const errors = computed(() =>
    (submitted.value ? validate(form, { type: [required], severity: [required], message: [required, minLength(5)], channel: [required] }) : {}));

function showError(error, fallback) {
  const { code, params } = toErrorMessage(error, fallback);
  toast.add({ severity: 'error', summary: t(code, params), life: 4000 });
}

onMounted(async () => {
  try {
    await alertsStore.loadAlerts();
  } catch (error) {
    showError(error, 'errors.load');
  } finally {
    loading.value = false;
  }
});

function openCreate() {
  editing.value = null;
  Object.assign(form, emptyForm());
  submitted.value = false;
  dialogVisible.value = true;
}

function openEdit(alert) {
  editing.value = alert;
  Object.assign(form, { type: alert.type, severity: alert.severity, message: alert.message, channel: alert.channel });
  submitted.value = false;
  dialogVisible.value = true;
}

async function save() {
  submitted.value = true;
  if (Object.keys(errors.value).length > 0) return;
  saving.value = true;
  try {
    if (editing.value) await alertsStore.updateAlert(editing.value, form);
    else await alertsStore.createAlert(form);
    toast.add({ severity: 'success', summary: t(editing.value ? 'alerts.updated' : 'alerts.created'), life: 2500 });
    dialogVisible.value = false;
  } catch (error) {
    showError(error, 'errors.save');
  } finally {
    saving.value = false;
  }
}

async function run(alert, action, successKey) {
  busyId.value = alert.id;
  try {
    const result = await action(alert);
    toast.add({ severity: 'success', summary: t(successKey, { channel: result ? t(`alerts.channel.${result}`) : '' }), life: 2500 });
  } catch (error) {
    showError(error, 'errors.save');
  } finally {
    busyId.value = null;
  }
}

function remove(alert) {
  confirm.require({
    header: t('alerts.delete-title'),
    message: t('alerts.delete-confirm', { message: alert.message }),
    icon: 'pi pi-exclamation-triangle',
    rejectProps: { label: t('common.cancel'), severity: 'secondary', outlined: true },
    acceptProps: { label: t('common.delete'), severity: 'danger' },
    accept: () => run(alert, alertsStore.deleteAlert, 'alerts.deleted'),
  });
}
</script>

<template>

</template>

<style scoped>

</style>