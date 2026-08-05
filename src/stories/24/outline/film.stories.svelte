<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FilmSvelte from '../../../lib/24/outline/film.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FilmSvelte,
		args: { class: '' },
	})
</script>

<Story name="Film" />
