<template>
  <div class="level">
    <div class="level-left">
      <div class="has-text-left">
        <messageContent
          v-if="!isUser"
          :message="message"
          :is-user="isUser"
          :is-same="isSame"
        ></messageContent>
      </div>
    </div>
    <div class="level-right">
      <div class="has-text-right">
        <messageContent
          v-if="isUser"
          :message="message"
          :is-user="isUser"
          :is-same="isSame"
        ></messageContent>
      </div>
    </div>
  </div>
</template>

<script>
import messageContent from "./MessageContent.vue"
export default {
  props: ['message', 'yourName', 'isSame'],
  components:{
    messageContent
  },
  computed: {
    isUser: function() {      
      return this.message.author === this.yourName
    }
  }
}
</script>
