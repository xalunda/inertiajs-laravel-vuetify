<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4" class="text-center">
            <logo height="50" style="fill:white"></logo>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-card-text>
                <v-form>
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        v-model="form.email"
                        label="Email"
                        name="email"
                        type="email"
                        :error-messages="$page.errors.email"
                        outlined
                        autocomplete="email"
                      />
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="form.password"
                        label="Password"
                        name="password"
                        type="password"
                        outlined
                        autocomplete="current-password"
                      />
                    </v-col>

                    <v-col cols="12">
                      <v-checkbox class="pa-0 ma-0" label="Remember me" v-model="form.remember"></v-checkbox>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="submit" large color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  metaInfo: { title: 'Login' },
  props: {
    errors: Object,
  },
  data() {
    return {
      sending: false,
      form: {
        email: null,
        password: null,
        remember: null,
      },
    }
  },
  methods: {
    submit() {
      this.sending = true
      this.$inertia.post(this.route('login.attempt'), {
        email: this.form.email,
        password: this.form.password,
        remember: this.form.remember,
      }).then(() => this.sending = false)
    },
  },
}
</script>
