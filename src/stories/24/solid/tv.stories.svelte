<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TvSvelte from '../../../lib/24/solid/tv.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: TvSvelte,
		args: { class: '' },
	})
</script>

<Story name="Tv" />
