import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AgentPage from '../views/AgentPage.vue'
import CallPage from '../views/CallPage.vue'

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	{
		path: '/agent/:id',
		name: 'AgentPage',
		component: AgentPage,
	},
	{
		path: '/call/:number',
		name: 'CallPage',
		component: CallPage,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})
export default router
