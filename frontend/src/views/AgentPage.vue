<template>
	<Table :allData="dynamicData" heading="Single Agent Page" />
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
			`/agent/${route.params.id}`
		)
		loadAgentData()

		return {
			dynamicData,
		}
	},
}
</script>

<style lang="scss" scoped></style>
