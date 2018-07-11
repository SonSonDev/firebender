<template>
  <div class="field has-addons">
    <p class="control is-expanded">
      <input class="input"
             type="text"
             @keyup.enter="send()"
             ref="input">
    </p>
    <p class="control">
      <a class="button"
         @click="send()">Send
      </a>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseMethods from "@/Mixins"
export default {
  mixins: [firebaseMethods],
  props: [
    "yourName"
  ],
  methods: {
    
  }

}
</script>
