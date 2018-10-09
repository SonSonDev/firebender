<template>
  <div class="field has-addons">
    <p class="control is-expanded">
      <input class="input"
             type="text"
             @keyup.enter="send()"
             v-model="inputValue">
    </p>
    <p class="control">
      <a class="button"
         @click="send()">Send
      </a>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseMethods from "@/Mixins"
export default {
  mixins: [firebaseMethods],
  data: () => ({
    inputValue:""
  }),
  props: {
    'yourName': {
      type: String,
      required: true
    }
  },
  methods: {
    send () {
      if (!this.inputValue.trim()) {
        return
      }
      const newEntry = {
        author: this.yourName,
        text: this.inputValue
      }
      firebase.database().ref('message/').push(newEntry)
      this.inputValue = ""
    }
  }

}
</script>
