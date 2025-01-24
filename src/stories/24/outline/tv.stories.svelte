<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TvSvelte from '../../../lib/24/outline/tv.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: TvSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Tv" />
