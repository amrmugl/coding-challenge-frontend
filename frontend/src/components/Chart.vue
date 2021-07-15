<template>
	<div class="flex flex-col items-center justify-center mt-20 lg:mt-32">
		<h3 class="mb-8 text-lg font-bold lg:text-2xl">
			Data chart showing calls status
		</h3>
		<pie-chart :data="chartData"></pie-chart>
	</div>
</template>

<script>
export default {
	props: ['chartData'],
	setup() {
		return {}
	},
}
</script>

<style lang="scss" scoped></style>
