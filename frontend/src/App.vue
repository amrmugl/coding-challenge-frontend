<template>
	<router-view v-slot="{ Component, route }">
		<transition name="fade">
			<component :is="Component" :key="route.path" />
		</transition>
	</router-view>
</template>

<script>
export default {
	setup() {
		return {}
	},
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
