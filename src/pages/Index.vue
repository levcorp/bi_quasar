<template>
  <q-page class="flex flex-center">
       <q-form
      @submit="login"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        label="Your email *"
        hint="Name and email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="password"
        label="Your password *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    {{token}}
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      email: null,
      password: null,
      token: '',
      accept: false
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    },
    login () {
      var app = this
      this.$auth.login({
        data: {
          email: app.email,
          password: app.password
        },
        rememberMe: true,
        fetchUser: true
      }).then(response => {
        console.log(response.data)
      }).catch(response => {
        console.log(response.data)
      })

      this.token = this.$auth.token()
    }
  }
}
</script>
