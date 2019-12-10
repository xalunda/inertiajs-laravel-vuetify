<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="$root.sideDrawer = !$root.sideDrawer" />
    <v-toolbar-title>
      <template v-if="$root.goBack">
        <inertia-link class="light-blue--text lighten-5--text" :href="route($root.goBack.url)">
          {{$root.goBack.title}}
        </inertia-link>
        /
      </template>
      {{$root.appTitle}}
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'AppBar'
  }
</script>
