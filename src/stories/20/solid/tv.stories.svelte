<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TvSvelte from '../../../lib/20/solid/tv.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: TvSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Tv" />
