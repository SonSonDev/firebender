<template>
  <div class="column online_container">
    <ConnectedUsers :users="users"
                   :your-name="yourName">
    </ConnectedUsers>
    <div class="disconnect button is-small"
         @click="disconnect">Disconnect
    </div>
  </div>
</template>

<script>
import ConnectedUsers from "./Panel/ConnectedUsers.vue"

export default {
  props: {
    'users': {
      type: Object,
      required: true
    },
    'yourName': {
      type: String,
      required: true
    }
  },
  
  components: { ConnectedUsers },
  methods: {
    disconnect: function () {
      window.localStorage.removeItem("yourName")
      window.location.reload()
    }
  }
}
</script>
