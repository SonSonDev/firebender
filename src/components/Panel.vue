<template>
  <div class="column online_container">
    <ConnectedUser :connected="connected"
                   :your-name="yourName">
    </ConnectedUser>
    <div class="disconnect button is-small"
         @click="disconnect">Disconnect
    </div>
  </div>
</template>

<script>
import ConnectedUser from "./Panel/ConnectedUser.vue"

export default {
  props: ['connected', 'yourName'],
  components: { ConnectedUser },
  methods: {
    disconnect: function () {
      window.localStorage.removeItem("yourName")
      window.location.reload()
    }
  }
}
</script>
