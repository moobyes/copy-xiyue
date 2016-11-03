//import 'assets/css/bootstrap.css'
//import 'assets/css/mystyle.css'
import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Course from './components/Course'
import School from './components/School'
import Partner from './components/Partner'
import Job from './components/Job'
import Support from './components/Support'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
	'/home':{
		component:Home
	},
	'/course':{
		component:Course
	},
	'/school':{
		component:School
	},
	'/partner':{
		component:Partner
	},
	'/job':{
		component:Job
	},
	'/support':{
		component:Support
	}
})

router.redirect({
	'*':'/home'
})
/* eslint-disable no-new */
//new Vue({
//el: 'body',
//components: { App }
//})
router.start(App,'app')
