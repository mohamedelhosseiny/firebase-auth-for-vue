<template>
  <div>
    <h1>Successful login!</h1>
    <p v-on:click="signOut"> Logout</p>          
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'sign-up',
  data () {
    return {

    }
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
