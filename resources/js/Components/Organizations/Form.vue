<template>
  <v-form ref="form">
    <v-row>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="form.name"
          :error-messages="$page.errors.name"
          label="Name"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="form.email"
          :error-messages="$page.errors.email"
          label="Email"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="form.phone"
          :error-messages="$page.errors.phone"
          label="Phone"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="form.address"
          :error-messages="$page.errors.address"
          label="Address"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="form.city"
          :error-messages="$page.errors.city"
          label="City"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="form.postal_code"
          :error-messages="$page.errors.postal_code"
          label="Postal code"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          v-model="form.region"
          :error-messages="$page.errors.region"
          label="Province/State"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-select
          v-model="form.country"
          :error-messages="$page.errors.country"
          :items="countries"
          label="Country"
          outlined
        ></v-select>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
  export default {
    name: 'OrganizationForm',

    props: {
      form: Object
    },

    data: vm => ({
      countries: [
        {value: "CA", text: 'Canada'},
        {value: "US", text: 'United States'},
      ],
    })
  }
</script>