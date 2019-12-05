<template>
  <v-row>
    <v-col cols="12">
      <p class="mb-12 leading-normal">Hey there! Welcome to Ping CRM, a demo app designed to help illustrate how <a class="text-indigo underline hover:text-orange-dark" href="https://github.com/inertiajs">Inertia.js</a> works.</p>
    </v-col>

    <v-col cols="12">
      <inertia-link class="btn-indigo" href="/500">500 error</inertia-link>
    </v-col>
    <v-col cols="12">
      <inertia-link class="btn-indigo" href="/404">404 error</inertia-link>
    </v-col>
  </v-row>
</template>

<script>
import Layout from '@shared/Layout'

export default {
  metaInfo: { title: 'Dashboard' },
  layout: (h, page) => h(Layout, [page]),
}
</script>
