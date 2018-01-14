<template>
<div class="sign-up">
  <p><router-link to="/login">Login</router-link></p>
  <h3>sign up</h3>
  <label for="email">Email</label>
  <input type="email" name="email" v-model="email">
  <label for="password">Password</label>
  <input type="password" name="password" v-model="password">
  <button v-on:click="signUp">Submit</button>
</div>


</template>

<script>
import firebase from 'firebase'

export default {
  name: 'sign-up',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
        (user) =>  {
          this.$router.replace('hello')
        },
        (err) => {
          alert('Oops ,' + err.message)
        }
        )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
