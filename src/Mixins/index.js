import firebase from "firebase"

const firebaseUse = {
  methods: {
    // get all the messages in firebase database & return an array
    fetchMessages () {
      var messages=[]
      firebase.database().ref("message/").on('value', (snap) => {
        for (const key in snap.val()) {
          if (snap.val().hasOwnProperty(key)) {
            messages.push(snap.val()[key])
          }
        }
      });
      return messages
    },
    
    // put yourName in firebase database, in "connected" Object
    iAmConnected () {
      firebase.database().ref('connected/' + this.yourName).set({
        name: this.yourName
      });
      //if window is closed, delete the name in the firebase database
      window.addEventListener("beforeunload", () => {
        firebase.database().ref('connected/' + this.yourName).remove();
      }, false);
    },

    // get connected user list
    fetchConnected: function() {
      firebase.database().ref("connected/").on('value', (snap) => {
        this.connected = snap.val();        
      })
    },

    // delete last message if click on idontknowwhichbutton
    deleteLastMessage () {
      window.addEventListener('keyup', function(event) {
        if (event.which !== 68 || !event.ctrlKey) {
          return
        }
        firebase.database().ref("message/").once('value', function(snap) {
          const responseArray = Object.keys(snap.val())
          const key = responseArray[responseArray.length-1]
          firebase.database().ref('message/' + key).remove();
        });
      })
    },
    send () {
      const input = this.$refs.input
      if (!input.value.trim()) {
        return;
      }
      const newEntry = {
        author: this.yourName,
        text: input.value
      }
      firebase.database().ref('message/').push(newEntry);
      input.value = ""
    }
  }
}

export default firebaseUse