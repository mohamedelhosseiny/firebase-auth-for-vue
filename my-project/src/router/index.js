import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import store from '@/components/store'
import signUp from '@/components/signUp'
import hello from '@/components/hello'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
	routes: [{
			path: '/login',
			name: 'login',
			component: Login
		}, {
			path: '/store',
			name: 'store',
			component: store
		}, {
			path: '/signUp',
			name: 'signUp',
			component: signUp
		}, {
			path: '/hello',
			name: 'hello',
			component: hello,
		}

	]
})

// router.beforeEach((to,from,next) => {
// 	let currentUser = firebase.auth().currentUser;
// 	let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

// 	if (requiresAuth && !currentUser) next('login')
// 	else if (!requiresAuth && currentUser) next('hello')
// 	else next()
// })

export default router