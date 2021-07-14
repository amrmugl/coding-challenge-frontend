import { ref, computed } from 'vue'
import axios from '../axios'

export const useAllData = () => {
	const allData = ref([])
	const chartData = ref({})

	const loadAllData = async () => {
		const response = await axios.get('/')
		const dataArray = response.data.data

		let interested = []
		let needsFollowUp = []
		let needReschedule = []
		let noAnswer = []

		allData.value = dataArray

		dataArray.forEach((item) => {
			if (item.resolution === 'interested') {
				interested.push(item)
			} else if (item.resolution === 'need reschedule') {
				needReschedule.push(item)
			} else if (item.resolution === 'needs follow up') {
				needsFollowUp.push(item)
			} else {
				noAnswer.push(item)
			}
		})

		const uniqueAgents = dataArray
			.map((eachData) => eachData.agentIdentifier)
			.filter((value, index, self) => self.indexOf(value) === index)

		const finalData = uniqueAgents.map((agent) => {
			const logAgentData = dataArray.filter(
				(log) => log.agentIdentifier === agent
			)
			const callCount = logAgentData.length
			const lastCallRecord = logAgentData[callCount - 1]
			return { ...lastCallRecord, callCount }
		})

		allData.value = finalData

		chartData.value = {
			Interested: Math.round((interested.length / 28) * 100),
			'Need Reschedule': Math.round((needReschedule.length / 28) * 100),
			'Needs Follow Up': Math.round((needsFollowUp.length / 28) * 100),
			'No Answer': Math.round((noAnswer.length / 28) * 100),
		}
	}

	return {
		loadAllData,
		chartData: computed(() => chartData.value),
		allData: computed(() => allData.value),
	}
}
