<template>
	<Table :allData="dynamicData" heading="Number Details Page" />
</template>

<script>
import { useRoute } from 'vue-router'
import Table from '../components/Table.vue'
import { useDynamicData } from '../hooks/dynamicData.js'
export default {
	components: {
		Table,
	},
	setup() {
		const route = useRoute()

		const { loadAgentData, dynamicData } = useDynamicData(
			`/call/${route.params.number}`
		)
		loadAgentData()

		return {
			dynamicData,
		}
	},
}
</script>

<style lang="scss" scoped></style>
