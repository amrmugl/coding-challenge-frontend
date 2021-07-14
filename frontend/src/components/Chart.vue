<template>
	<div class="flex flex-col items-center justify-center mt-32">
		<h3 class="mb-8 text-2xl font-bold">Data chart showing calls status</h3>
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
