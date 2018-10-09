import firebase from 'firebase'

const fireMethods = {
  methods: {
    // get all the messages in firebase database & return an array
    fetchMessages () {
      firebase.database().ref('message/').on('value', (snap) => {
        this.messages=[]
        for (const key in snap.val()) {
          if (snap.val().hasOwnProperty(key)) {
            this.messages.push(snap.val()[key])
          }
        }
      })
    },
    
    // put yourName in firebase database, in 'connected' Object
    iAmConnected () {
      firebase.database().ref(`connected/${this.yourName}`).set({
        name: this.yourName
      })
      //if window is closed, delete the name in the firebase database
      window.addEventListener('beforeunload', () => {
        firebase.database().ref(`connected/${this.yourName}`).remove()
      }, false)
    },

    // get connected user list
    fetchConnected: function() {
      firebase.database().ref('connected/').on('value', (snap) => {
        this.users = snap.val()        
      })
    },

    // delete last message if ctrl+delete
    deleteLastMessage () {
      window.addEventListener('keyup', function(event) {
        if (event.which !== 46 || !event.ctrlKey) {
          return
        }
        firebase.database().ref('message/').once('value', function(snap) {
          const responseArray = Object.keys(snap.val())
          const key = responseArray[responseArray.length-1]
          firebase.database().ref(`message/${key}`).remove()
        })
      })
    },

    
  }
}

export default fireMethods