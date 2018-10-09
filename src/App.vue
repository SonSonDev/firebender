<template>
  <section id="app">
    <div class="section columns">
      <Chat :messages="messages"
            :your-name="yourName">
      </Chat>
      <Panel :users="users"
             :your-name="yourName">
      </Panel>
    </div>
  </section>
</template>

<script>
import Chat from '@/components/Chat.vue'
import Panel from '@/components/Panel.vue'
import firebase from 'firebase'
import fireMethods from '@/Mixins'

export default {
  name: 'app',
  mixins: [ fireMethods ],
  components: {
    Chat, Panel
  },
  data: () => ({
    yourName: "",
    messages: [],
    users: {}
  }),
  methods: {
    // Verify yourName in localStorage
    chooseYourName () {
      if(!window.localStorage.getItem("yourName")){
        const name = prompt("Enter your name")
        if (!name) {
          window.location.reload()
          return
        }
        this.yourName = name
        window.localStorage.setItem("yourName", this.yourName)
      } else {
        this.yourName = window.localStorage.getItem("yourName")
      }
    }
  },
  created () {
    this.chooseYourName()
    this.iAmConnected()
    this.fetchMessages()
    this.fetchConnected()
    this.deleteLastMessage()
  },
  updated () {
    setTimeout( () => {
      window.scroll({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth' 
      })
    }, 100)
  }
}
</script>

<style>
  iframe {
    width: 100%;
    height: auto;
  }
  .name {
    margin-top: 20px;
    margin-bottom: 6px;
  }
  .disconnect {
    display: block;
  }
  .people {
    margin: 3px;
  }
  .level-left, .level-right {
    max-width: 100%;
  }
  .online {
    display: flex;
  }
  @media (min-width: 768px) {
    .online_container {
      margin-top: auto;
      position: sticky;
      bottom: 3rem;
    }
    .people {
      margin-right: 100%;
    }
  }
  .level:not(:last-child) {
    margin-bottom: 10px;
  }
  .messageContainer {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1.5rem;
  }
</style>