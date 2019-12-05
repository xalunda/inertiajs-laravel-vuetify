<template>
  <v-row>
    <v-col cols="12" v-if="organization.deleted_at">
      <trashed-banner @restore="restore">
        This organization has been deleted.
      </trashed-banner>
    </v-col>

    <v-col cols="12">
      <organization-form v-bind:form.sync="form"></organization-form>
    </v-col>

    <v-col cols="12" class="py-0">
      <v-btn v-if="!organization.deleted_at" color="warning" @click="destroy">Delete Organization</v-btn>
      <v-btn :loading="sending" color="primary" @click="submit">Update Organization</v-btn>
    </v-col>

    <v-col cols="12">
      <h2 class="headline font-weight-bold">
        Contacts
      </h2>
    </v-col>
    <v-col cols="12">
      <v-simple-table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in organization.contacts" :key="contact.id">
            <td>{{ contact.name }}</td>
            <td>{{ contact.city }}</td>
            <td>{{ contact.phone }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import Layout from '@shared/Layout'

export default {
  metaInfo() {
    return {
      title: this.organization.name,
      goBack: {
        title: 'Organizations',
        url: 'organizations.index',
      }
    }
  },

  layout: (h, page) => h(Layout, [page]),

  props: {
    organization: Object,
  },

  remember: 'form',

  data: vm => ({
    sending: false,
    form: {
      ...vm.organization
    },
  }),

  methods: {
    submit() {
      this.sending = true
      this.$inertia.put(this.route('organizations.update', this.organization.id), this.form)
        .then(() => this.sending = false)
    },

    destroy() {
      if (confirm('Are you sure you want to delete this organization?')) {
        this.$inertia.delete(this.route('organizations.destroy', this.organization.id))
      }
    },

    restore() {
      if (confirm('Are you sure you want to restore this organization?')) {
        this.$inertia.put(this.route('organizations.restore', this.organization.id))
      }
    },
  },
}
</script>
