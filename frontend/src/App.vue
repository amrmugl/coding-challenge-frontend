<template>
	<transition name="fade">
		<router-view />
	</transition>
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
	transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
