<template>
  <v-snackbar
    v-model="$root.flashSnackbar"
    color="success"
    multi-line
    :timeout="6000"
    top
    @input="close"
    vertical
  >
    {{ $root.flashMessage }}
    <v-btn
      dark
      text
      @click="close"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    name: 'FlashMessages',
    data: vm => ({}),
    methods: {
      close() {
        this.$root.flashSnackbar = false
        this.$root.flashMessage = ''
      }
    }
  }
</script>