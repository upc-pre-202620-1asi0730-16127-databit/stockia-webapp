<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  hint: { type: String, default: '' },
  error: { type: Object, default: null },
  required: { type: Boolean, default: false },
});

const { t } = useI18n();

const hintId = computed(() => `${props.id}-hint`);
const errorId = computed(() => `${props.id}-error`);
const invalid = computed(() => props.error !== null && props.error !== undefined);
const describedBy = computed(() =>
    [props.hint ? hintId.value : null, invalid.value ? errorId.value : null].filter(Boolean).join(' ') || undefined);

</script>

<template>
  <div class="form-field">
    <label :for="id">
      {{ label }}<span v-if="required" class="required-mark" aria-hidden="true"> *</span>
    </label>
    <slot :id="id" :describedBy="describedBy" :invalid="invalid" :required="required" />
    <p v-if="hint" :id="hintId" class="form-hint">{{ hint }}</p>
    <p v-if="invalid" :id="errorId" class="form-error">
      <i class="pi pi-exclamation-circle" aria-hidden="true" /> {{ t(error.code, error.params ?? {}) }}
    </p>
  </div>
</template>

<style scoped>

</style>