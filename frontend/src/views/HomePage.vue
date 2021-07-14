<template>
	<div>
		<Header />
		<Chart :chartData="chartData" />
		<Table :allData="allData" />
	</div>
</template>

<script>
import Chart from '../components/Chart.vue'
import Header from '../components/Header.vue'
import Table from '../components/Table.vue'
import { useAllData } from '../hooks/allData.js'
export default {
	components: { Header, Chart, Table },
	setup() {
		const { loadAllData, chartData, allData } = useAllData()

		loadAllData()
		return {
			chartData,
			allData,
		}
	},
}
</script>

<style lang="scss" scoped></style>
