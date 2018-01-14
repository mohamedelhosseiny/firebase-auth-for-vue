<template>
<div class="login">
  <p><router-link to="/signUp">Sign up</router-link></p>
  <h3>Login</h3>
  <label for="email">Email</label>
  <input type="email" name="email" v-model="email">
  <label for="password">Password</label>
  <input type="password" name="password" v-model="password">
  <button v-on:click="login">Submit</button>
</div>


</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
         (user) => {
          this.$router.replace('hello')
        },
         (err) => {
          alert('Oops ,' + err.message)
        }
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
