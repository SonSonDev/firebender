<template>
  <div class="notification">
    <div class="is-size-7 people">
      Online({{Object.keys(connected).length}})
    </div>
    <div v-for="(user, index) in connected"
         class="tag people"
         :class="isUser(user) ? 'is-info' : 'is-danger'"
         :key="index">{{user.name}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['connected', 'yourName'],
  methods: {
    isUser: function(user) {
      return user.name === this.yourName
    }
  }
}
</script>
