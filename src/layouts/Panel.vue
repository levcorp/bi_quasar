<template>
  <q-layout view="lHh lpR lFr">

    <q-header
      elevated
      class="bg-theme bg-white text-white"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="eva-menu-outline"
          @click="left = !left"
        />

        <q-toolbar-title class="text-logo text-subtitle1 text-bold">
          LEVCORP
        </q-toolbar-title>

        <!--<q-btn dense flat round icon="menu" @click="right = !right" />-->
        <q-btn
          dense
          flat
          size="sm"
          icon="eva-person-outline"
        >
          <q-menu fit>
            <q-list style="min-width: 120px">
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>Perfil </q-item-section>
              </q-item>
              <q-separator />
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>Cerrar Sesion</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      show-if-above
      side="left"
      :width="250"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="eva-home-outline" />
            </q-item-section>

            <q-item-section>
              Inicio
            </q-item-section>
          </q-item>
          <q-expansion-item
            expand-separator
            icon="send"
            label="Ventas"
          >
            <q-item
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="eva-home-outline" />
              </q-item-section>

              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="eva-home-outline" />
              </q-item-section>

              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>
              Drafts
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar
            size="56px"
            class="q-mb-sm"
          >
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">{{this.$auth.user().name}}</div>
          <div>{{this.$auth.user().email}}</div>
        </div>
      </q-img>
    </q-drawer>
    <q-drawer
      v-model="right"
      side="right"
      overlay
      behavior="desktop"
      elevated
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      elevated
      class="bg-theme text-center q-pa-sm text-caption"
    >
      Copyright © 2019 Levcorp. Todos los derechos reservados.
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false,
      info: null

    }
  },
  mounted () {
    this.handleGetUser()
  },
  computed: {
    Name () {
      return this.$store.state.auth.User.Name
    },
    Email () {
      return this.$store.state.auth.User.Email
    }
  },
  methods: {
    handleGetUser () {
      this.$auth.fetch().then(response => {
        this.user = response.data.user
        this.$store.dispatch('auth/HandleSetUser', response.data.data)
      })
    },
    handlePan ({ evt, ...info }) {
      this.info = info

      // native Javascript event
      // console.log(evt)

      if (info.isFirst) {
        this.panning = true
      } else if (info.isFinal) {
        this.panning = false
      }
    }
  }
}
</script>
<style lang="css">
.text-logo {
  letter-spacing: 2px;
}
.bg-theme {
  background: #01435b !important;
}
.bg-menu {
  background: #01435b !important;
}
.bg-button {
  background: #d9ebff !important;
}
</style>
