<template>
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 gt-sm">
        <q-page class="flex flex-center">
          <lottie-animation
            path="statics/lottie/4.json"
        />
        </q-page>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
        <q-page class="flex flex-center">
          <q-form @submit="login" @reset="onReset" class="q-gutter-md"  style="width: 70%">
            <p class="q-pb-sm text-logo text-center text-h5 text-bold">LEVCORP</p>
            <q-input  rounded  dense v-model="email" label="Correo Electronico" />
            <q-input  rounded  dense v-model="password" label="Contraseña" />
            <q-checkbox keep-color color="bg-theme" v-model="accept" label="Recuerdame"/>
            <div class="flex flex-center">
              <q-btn color="white" style="background: #01435b !important;" label="Entrar" type="submit" size="sm" icon="lock"/>
            </div>
          </q-form>
        </q-page>
      </div>
    </div>
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
<style lang="css">
  .text-logo {
    letter-spacing: 2px;
    color: #01435b;
  }
  .bg-theme {
    background: #01435b !important;
  }
</style>
