import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import App from './App.vue';
import moment from "moment";
import { getInterval } from './functions'

moment.locale("ru");

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const storeToStoragePlugin = store => {
	store.subscribe((mutation, state) => {
		let newState = JSON.stringify(state.items),
			oldState = localStorage.items;
		if (newState != oldState) {
			localStorage.items = JSON.stringify(state.items);
		}
	});
};

const store = new Vuex.Store({
	plugins: [
		storeToStoragePlugin
	],
	state: {
		items: [],
		interval: null,
	},
	getters: {
		count(state) {
			return state.items.length;
		}
	},
	actions: {
		sort(context) {
			context.state.items.sort((first, second) => {
				first = moment(first.date + " " + first.time);
				second = moment(second.date + " " + second.time);

				let diff = first.diff(second);

				if (diff < 0) return 1;
				if (diff == 0) return 0;
				if (diff > 0) return -1;
			});
		}
	},
	mutations: {
		addItem(state, data) {
			state.items.push(data);
		},
		editItem(state, data) {
			let index = state.items.findIndex((item) => { return item.id == data.id });
			state.items[index].name = data.name;
		},
		removeItem(state, id) {
			let index = state.items.findIndex(item => item.id == id);
			state.items.splice(index, 1);
		},
		updateInterval(state) {
			state.items.forEach((item) => {
				item.diff = getInterval(item.date + " " + item.time);
				item.inFuture = moment(item.date + " " + item.time).isSameOrAfter();
			});
		},
		start(state) {
			if (!state.interval) {
				state.interval = setInterval(() => this.commit('updateInterval'), 1000);
			}
		},
		stop(state) {
			if (state.interval) {
				clearInterval(state.interval);
				state.interval = null;
			}
		},
	}
})

import List from './components/List'
import AddItem from './components/AddItem'
import EditItem from './components/EditItem'

const router = new VueRouter({
	routes: [
		{ path: '/', component: List },
		{ path: '/add', component: AddItem },
		{ path: '/edit/:id', component: EditItem },
	]
})

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount("#app");
