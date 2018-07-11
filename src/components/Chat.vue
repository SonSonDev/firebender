<template>
  <div class="column is-four-fifths">
    <div class="box">
      <div id="container" class="notification is-white">

        <Message v-for="(message, index) in messages"
                 :message="message"
                 :your-name="yourName"
                 :is-same="isSame(messages[index-1] && messages[index-1].author, message.author)"
                 :key="index">
        </Message>

      </div>

      <InputMessage :your-name="yourName">
      </InputMessage>
    </div>
  </div>
</template>

<script>
import Message from "./Chat/Message.vue"
import InputMessage from "./Chat/InputMessage.vue"

export default {
  props: ['messages', 'yourName'],
  components: { Message, InputMessage },
  methods: {
    isSame: function(prevAuthor, author) {
      return prevAuthor === author
    }
  }
}
</script>
