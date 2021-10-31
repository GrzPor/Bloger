<template lang="pug">
	.py-4
		.flex.justify-between.items-center.mb-12
			h1.text-4xl Create new post
			router-link(
				:to="{ name: 'posts' }"
				class="p-2 rounded-lg text-white bg-yellow-500 hover:bg-yellow-700 transition-colors duration-500 uppercase font-bold"
			) Back to all posts  
		form(
			action=""
			method="post"
			class="grid grid-cols-2 gap-4"
		)
			label.block
				span.text-gray-700 Tytuł
				input(
					type="text"
					name="title"
					class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
				)
			label.block
				span.text-gray-700 Opis
				input(
					type="text"
					name="description"
					class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
				)
			label.block
				span.text-gray-700 Tagi
				input(
					type="text"
					name="tags"
					class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
				)
			label.block
				span.text-gray-700 Kategorie
				input(
					type="text"
					name="categories"
					class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
				)
			.flex.justify-end.col-span-2
				button(
					type="submit"
					class="p-2 rounded-lg text-white bg-purple-700 hover:bg-purple-900 transition-colors duration-500 uppercase font-bold"
				) Submit
</template>

<script>
export default {

}
</script>

<style>

</style>
