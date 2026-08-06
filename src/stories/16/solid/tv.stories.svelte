<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TvSvelte from '../../../lib/16/solid/tv.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: TvSvelte,
		args: { class: '' },
	})
</script>

<Story name="Tv" />
