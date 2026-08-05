<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FilmSvelte from '../../../lib/24/solid/film.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: FilmSvelte,
		args: { class: '' },
	})
</script>

<Story name="Film" />
