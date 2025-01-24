<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FilmSvelte from '../../../lib/20/solid/film.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: FilmSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Film" />
