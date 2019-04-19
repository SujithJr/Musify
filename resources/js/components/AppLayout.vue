<template>
	<main>
		<section class="c-navbar">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="flex items-center justify-between py-3">
							<template v-if="isLoggedIn">
								<router-link to="/" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a"><h2 class="text-3xxl font-bold mb-0"><span class="text-pink-dark">musif</span><img src="/images/yy.png" style="width: 35px;"></h2></router-link>
							</template>
							<template v-else>
								<h2 class="text-3xxl font-bold mb-0"><span class="text-pink-dark">musif</span><img src="/images/yy.png" style="width: 35px;"></h2>
							</template>
							<div class="flex items-center justify-between">
								<router-link v-if="isLoggedIn" to="/album" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a">Albums</router-link>
								<router-link v-if="isLoggedIn" to="/artist" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a">Artists</router-link>
								<router-link v-if="isLoggedIn" to="/musician" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a">Musicians</router-link>
								<router-link v-if="isLoggedIn" to="/director" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a">Directors</router-link>
								<router-link v-if="!isLoggedIn" to="/login" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a">Login</router-link>
								<!-- <router-link v-if="!isLoggedIn" to="/register" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a">Register</router-link> -->
								<!-- <button v-if="isLoggedIn" @click.prevent="logout()" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold outline-none border-none">Logout</button> -->
								<ul class="list-reset mb-0">
									<li class="dropdown menu-drop" v-if="isLoggedIn">
										<a id="navbarDropdown" class="dropdown-toggle  c-link list-reset no-underline text-pink-dark font-bold outline-none" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
											<span class="caret text-pink-dark text-xl"></span>
										</a>
										<div class="dropdown-menu dropdown-menu-right p-0 py-1 m-0" style="left: 2px !important;" aria-labelledby="navbarDropdown">
											<a class="dropdown-item c-link-logout px-4 py-2 list-reset no-underline text-pink-dark font-bold outline-none border-none" href="#">
												Profile
											</a>
											<a class="dropdown-item c-link-logout px-4 py-2 list-reset no-underline text-pink-dark font-bold outline-none border-none" href="#" @click.prevent="logout()">
												Logout
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="container mt-8">
			<div class="row">
				<div class="col-md-12">
					<transition name="fade" mode="out-in">
						<!-- <div class="text-center" v-if="isLoading">
							<img src="/images/spinner.svg" class="inline-block" style="width: 90px;">
						</div> -->
						<!-- <div v-else> -->
							<router-view></router-view>
						<!-- </div> -->
					</transition>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
import axios from 'axios'
export default {
	name: 'AppLayout',
	data () {
		return {
			refCount: 0,
			isLoading: false
		}
	},

	methods: {
		logout () {
			this.$store.dispatch('logout')
		},

		// setLoading(isLoading) {
		// 	if (isLoading) {
		// 		this.refCount++;
		// 		this.isLoading = true;
		// 	} else if (this.refCount > 0) {
		// 		this.refCount--;
		// 		this.isLoading = (this.refCount > 0);
		// 	}
		// }
	},

	created () {
		// axios.interceptors.request.use((config) => {
		// 	this.setLoading(true)
		// 	return config
		// }, (error) => {
		// 	this.setLoading(false)
		// 	return Promise.reject(error)
		// });

		// axios.interceptors.response.use((response) => {
		// 	this.setLoading(false)
		// 	return response
		// }, (error) => {
		// 	this.setLoading(false)
		// 	return Promise.reject(error)
		// });
	},

	computed: {
		isLoggedIn () {
			return this.$store.getters['isLoggedIn']
		},
		// loading () {
		// 	return this.$store.getters['loading']
		// }
	}
}

</script>
<style scoped>
.dropdown-toggle::after {
	vertical-align: middle !important;
}
.c-link-logout:hover {
	color: #eb5286 !important;
	background: #ccc !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slow {
	transition: 2s all;
}
</style>
