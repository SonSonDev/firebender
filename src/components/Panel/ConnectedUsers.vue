<template>
  <div class="notification">
    <div class="is-size-7 people">
      Online({{Object.keys(users).length}})
    </div>
    <div v-for="(user, index) in users"
         class="tag people"
         :class="isUser(user) ? 'is-info' : 'is-danger'"
         :key="index">{{user.name}}
    </div>
  </div>
</template>

<script>
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
  methods: {
    isUser: function(user) {
      return user.name === this.yourName
    }
  }
}
</script>
