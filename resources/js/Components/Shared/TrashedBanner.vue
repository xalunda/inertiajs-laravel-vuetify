<template>
  <v-banner class="warning" single-line>

    <slot />

    <template v-slot:actions>
      <v-btn @click="$emit('restore')">Restore</v-btn>
    </template>
  </v-banner>
</template>

<script>
export default {
  name: 'TrashedBanner'
}
</script>
