// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import firebase from 'firebase'
import vueResource from 'vue-resource'
Vue.use(vueResource)

Vue.config.productionTip = false


let app;
var config = {
	apiKey: "AIzaSyA2Og6jGJfRWp_1E73wNFMtM5OqG81qu9k",
	authDomain: "vuejs-sample-424eb.firebaseapp.com",
	databaseURL: "https://vuejs-sample-424eb.firebaseio.com",
	projectId: "vuejs-sample-424eb",
	storageBucket: "",
	messagingSenderId: "937148655786"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
	if(!app) {
		/* eslint-disable no-new */
		app = new Vue({
			el: '#app',
			store,
			router,
			components: {
				App
			},
			template: '<App/>'
		})	
	}
});
