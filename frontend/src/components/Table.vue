<template>
	<div class="flex flex-col items-center justify-center px-8 my-28">
		<h3 class="mb-8 text-2xl font-bold">Data With Details</h3>
		<table class="table-auto">
			<thead>
				<tr>
					<th>Photo</th>
					<th>Name</th>
					<th>Email</th>
					<th>Number</th>
					<th>Call Date & Time</th>
					<th>Duration</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in allData" :key="item.identifier">
					<td>
						<img
							:src="item.photo"
							:alt="`${item.firstName} ${item.lastName}`"
						/>
					</td>
					<td>{{ `${item.firstName} ${item.lastName}` }}</td>
					<td>{{ item.email }}</td>
					<td>{{ item.number }}</td>
					<td>{{ formattedDate(item.dateTime) }}</td>
					<td>{{ item.duration }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: ['allData'],
	setup() {
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
		}
	},
}
</script>

<style lang="scss" scoped></style>
