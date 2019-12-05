<template>
  <v-row>
    <v-col cols="12" class="py-0">
      <v-row justify="end" dense>
        <v-col cols="auto" class="py-0">
          <v-btn @click="create" color="primary">Create Organization</v-btn>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <data-table-wrapper
        :items="organizations"
        :headers="headers"
        with-search
        sort-by="name"
      >
        <template #item="{ item }">
          <tr>
            <td>
              {{ item.id }}
            </td>
            <td>
              {{ item.name }}
            </td>
            <td>{{ item.city }}</td>
            <td>{{ item.phone }}</td>

            <td class="text-right">

              <template v-if="item.deleted_at">
                <v-chip color="warning" outlined>Deleted</v-chip>
              </template>

              <v-btn text icon @click="edit(item.id)">
                <v-icon>edit</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>

      </data-table-wrapper>
    </v-col>
  </v-row>
</template>

<script>
import Layout from '@shared/Layout'

export default {
  metaInfo: { title: 'Organizations' },

  layout: (h, page) => h(Layout, [page]),

  props: {
    organizations: Array,
  },

  data: vm => ({
    headers: [
      {text: 'ID', value: 'id'},
      {text: 'Name', value: 'name'},
      {text: 'City', value: 'city'},
      {text: 'Phone', value: 'phone'},
      {text: '', sortable: false},
    ],
  }),

  methods: {
    create() {
      this.$inertia.visit(route('organizations.create'))
    },
    edit(_organisation) {
      this.$inertia.visit(route('organizations.edit', _organisation))
    },
  }
}
</script>
