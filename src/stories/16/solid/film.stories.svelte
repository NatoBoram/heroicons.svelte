<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FilmSvelte from '../../../lib/16/solid/film.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FilmSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Film" />
