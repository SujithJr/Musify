<template>
	<main>
		<section class="c-navbar">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="flex items-center justify-between py-3">
							<h2 class="text-3xxl font-bold mb-0"><span class="text-pink-dark">musif</span><img src="/images/yy.png" style="width: 35px;"></h2>
							<div class="flex items-center justify-between">
								<router-link v-if="isLoggedIn" to="/albums" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a">Albums</router-link>
								<router-link v-if="isLoggedIn" to="/artist" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a">Artists</router-link>
								<router-link v-if="isLoggedIn" to="/musician" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a">Musicians</router-link>
								<router-link v-if="!isLoggedIn" to="/login" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a">Login</router-link>
								<!-- <router-link v-if="!isLoggedIn" to="/register" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold" tag="a">Register</router-link> -->
								<button v-if="isLoggedIn" @click.prevent="logout()" class="c-link mx-4 list-reset no-underline text-pink-dark font-bold outline-none border-none">Logout</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="container mt-8">
			<div class="row">
				<div class="col-md-12">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
export default {
	data: () => ({
	}),

	methods: {
		logout () {
			this.$store.dispatch('logout')
			// axios.post('/logout', {}).then(() => {
			// 	window.location = '/login'
			// })
		}
	},

	// created () {
	// 	this.$store.getters.isLoggedIn ? this.$store.dispatch('currentUser') : null
	// },

	computed: {
		isLoggedIn () {
			return this.$store.getters.isLoggedIn
		}
	}
}

</script>
<style scoped>
</style>
