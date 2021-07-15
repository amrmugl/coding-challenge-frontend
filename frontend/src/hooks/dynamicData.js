import { ref, computed } from 'vue'
import axios from '../axios'

export const useDynamicData = (query) => {
	const dynamicData = ref([])

	const loadAgentData = async () => {
		const response = await axios.get(query)
		dynamicData.value = response.data.logs
	}

	return {
		loadAgentData,
		dynamicData: computed(() => dynamicData.value),
	}
}
