<template>

  <v-row>

    <!-- THE SEARCH -->
    <v-col cols="12" v-if="withSearch">
      <v-row justify="end">
        <v-col cols="12" md="6" lg="4" xl="3">
          <v-text-field
            v-model="search"
            append-icon="search"
            label="SEARCH"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </v-col>

    <!-- THE TABLE -->
    <v-col cols="12">
      <v-data-table
        :mobile-breakpoint="0"
        :sort-by="sortBy"
        :sort-desc="sortDesc"
        :items="items"
        :headers="headers"
        :search="search"
        :items-per-page="itemsPerPage"
        :footer-props="footerProps"
        class="elevation-1"
      >
        <template #item="{ item }">
          <slot name="item" :item="item"/>
        </template>

        <template #no-results>
          <v-alert color="warning" icon="warning" outlined>
            No results found for '{{search}}'
          </v-alert>
        </template>

      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'DataTableWrapper',

    props: {
      items: Array,
      headers: Array,
      sortBy: [String, Array],
      withSearch: {
        type: Boolean,
        default: false
      },
      sortDesc: {
        type: Boolean,
        default: false
      },
    },

    data: vm => ({
      search: '',
      footerProps: {
        'items-per-page-options': [10, 25, 50, -1],
        'items-per-page-text': 'Per page',
        'items-per-page-all-text': 'All'
      },
      itemsPerPage: 10,
    })
  }
</script>