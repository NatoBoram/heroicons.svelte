<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TvSvelte from '../../../lib/16/solid/tv.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: TvSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Tv" />
