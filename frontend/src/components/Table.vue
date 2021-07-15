<template>
	<div class="flex flex-col items-center justify-center px-8 my-28">
		<div v-if="!home" class="mb-8">
			<RouterLink
				to="/"
				class="px-4 py-2 text-sm text-black transition-all bg-white rounded-lg  lg:text-base hover:bg-gray-400"
				>Home</RouterLink
			>
		</div>
		<h3 class="text-lg font-bold lg:text-2xl mb-9">{{ heading }}</h3>
		<div class="w-full m-2 overflow-x-auto lg:w-auto">
			<table
				class="text-xs border border-collapse border-white table-auto  lg:text-base"
			>
				<thead>
					<tr>
						<th v-if="home" class="p-3 text-center border border-white lg-p-5">
							Photo
						</th>
						<th class="p-3 text-center border border-white lg-p-5">Name</th>
						<th v-if="home" class="p-3 text-center border border-white lg-p-5">
							Email
						</th>
						<th class="p-3 text-center border border-white lg-p-5">Number</th>
						<th v-if="home" class="p-3 text-center border border-white lg-p-5">
							Call Count
						</th>
						<th class="p-3 text-center border border-white lg-p-5">
							Call Date & Time
						</th>
						<th class="p-3 text-center border border-white lg-p-5">Duration</th>
						<th class="p-3 text-center border border-white lg-p-5">
							Resolution
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in allData" :key="item.identifier">
						<td v-if="home" class="p-3 text-center border border-white lg:p-5">
							<img
								class="rounded-full w-14 h-1w-14"
								:src="item.photo"
								:alt="`${item.firstName} ${item.lastName}`"
							/>
						</td>
						<td class="p-3 text-center border border-white lg:p-5">
							<RouterLink
								class="transition-all hover:underline hover:text-gray-400"
								:to="{
									name: 'AgentPage',
									params: { id: item.agentIdentifier },
								}"
							>
								{{ `${item.firstName} ${item.lastName}` }}
							</RouterLink>
						</td>
						<td v-if="home" class="p-3 text-center border border-white lg:p-5">
							{{ item.email }}
						</td>
						<td class="p-3 text-center border border-white lg:p-5">
							<RouterLink
								class="transition-all hover:underline hover:text-gray-400"
								:to="{ name: 'CallPage', params: { number: item.number } }"
							>
								{{ item.number }}
							</RouterLink>
						</td>
						<td v-if="home" class="p-3 text-center border border-white lg:p-5">
							{{ item.callCount }}
						</td>
						<td class="p-3 text-center border border-white lg:p-5">
							{{ formattedDate(item.dateTime) }}
						</td>
						<td class="p-3 text-center border border-white lg:p-5">
							{{ item.duration }}
						</td>
						<td class="p-3 text-center border border-white lg:p-5">
							{{ item.resolution }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
	props: ['allData', 'heading'],
	setup() {
		const home = ref(true)
		const route = useRoute()

		if (route.path !== '/') {
			home.value = false
		}

		const formattedDate = (d) => {
			const date = new Date(d)
			const hours = date.getUTCHours()
			const mins = date.getUTCMinutes()
			const month = date.getUTCMonth()
			const day = date.getUTCDate()
			const year = date.getUTCFullYear()
			return `${day}/${month}/${year} ${hours}:${mins}`
		}

		return {
			formattedDate,
			home,
		}
	},
}
</script>

<style lang="scss" scoped></style>
